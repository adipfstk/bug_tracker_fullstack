import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReplaySubject } from 'rxjs';
import { Project } from '../../../../models/project.model';
import { ProjectService } from '../../../../services/project.service';
import { DashDialogComponent } from './dash-dialog/dash-dialog.component';
import { Ticket } from '../../../../models/ticket.model';
import { PageEvent } from '@angular/material/paginator';
import { UserService } from '../../../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { TicketService } from '../../../../services/ticket.service';

@Component({
  selector: 'app-dash-con',
  templateUrl: './dash-content.component.html',
  styleUrls: ['./dash-content.component.css'],
})
export class DashContentComponent implements OnInit {
  @Input()
  title: string = '';
  dataSource: ReplaySubject<Project[] | Ticket[]> = new ReplaySubject(1);
  dataSource$ = this.dataSource.asObservable();

  page!: number;
  size!: number;

  totalPages!: number;
  fullTicket!: Ticket;

  @Input()
  activeFunctionName!: string;

  cbFetchingArray: any = {
    projects: (): void => {
      this._projectService.getRealTimeProjects(this.page, this.size).subscribe({
        next: (response: any) => {
          this.dataSource.next(response.content);
          this.totalPages = response.totalPages;
        },
        error: (_: any) => {
          window.alert('Cannot fetch data from API');
        },
      });
    },
    tickets: (): void => {
      this.route.queryParams.subscribe((next) =>
        this._ticketService
          .getTickets(next['projectName'], next['number'], next['size'])
          .subscribe({
            next: (response: any) => {
              this.fullTicket = response.content;
              const mappedContent = response.content.map((item: Ticket) => ({
                title: item.title,
                description: item.description,
              }));
              this.dataSource.next(mappedContent);
              this.totalPages = response.totalPages;
            },
          })
      );
    },

    users: (): void => {
      this.route.queryParams.subscribe((next) =>
        this._userService
          .getUsersByProjectName(
            next['projectName'],
            next['number'],
            next['size']
          )
          .subscribe({
            next: (response: any) => {
              this.dataSource.next(response.content);
              this.totalPages = response.totalPages;
            },
          })
      );
    },
  };

  dialogComponents: any = {
    projects: DashDialogComponent,
    tickets: DashDialogComponent,
  };

  constructor(
    private _projectService: ProjectService,
    private _userService: UserService,
    private _dialog: MatDialog,
    private route: ActivatedRoute,
    private _ticketService: TicketService
  ) {}

  ngOnInit() {
    this.page = 0;
    this.size = 5;

    const activeFunction = this.cbFetchingArray[this.activeFunctionName];
    if (activeFunction) {
      activeFunction();
    } else {
      window.alert('Bad request');
    }
  }

  openDialog() {
    const dialogComponent = this.dialogComponents[this.activeFunctionName];
    const dialogRef = this._dialog.open(dialogComponent);
    dialogRef.afterClosed().subscribe();
  }

  setPageConfiguration(event: PageEvent) {
    console.log(event);
    this.page = event.pageIndex;
    this.size = event.pageSize;
  }
}
