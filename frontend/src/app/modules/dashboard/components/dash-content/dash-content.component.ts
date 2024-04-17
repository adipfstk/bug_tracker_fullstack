import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { PageEvent } from '@angular/material/paginator';

import {DashDialogComponent} from "../dash-dialog/dash-dialog.component";
import { Ticket } from '../../../../core/models/ticket.model';
import { Project } from '../../../../core/models/project.model';
import User from '../../../../core/models/user.model';
import { ProjectService, TicketService, UserService } from '../../../../core';


@Component({
  selector: 'dash-content',
  templateUrl: './dash-content.component.html',
  styleUrls: ['./dash.content.component.css'],
})
export class DashContentComponent implements OnInit {
  @Input() title!: string;
  @Input() activeFunctionName!: string;

  page: number = 0;
  size: number = 5;

  totalPages!: number;
  dataContainer!: MatTableDataSource<Ticket[] | Project[] | User[]>;
  columnContainer!: string[];

  cbFetchingArray: any = {
    projects: (): void => {
      this._projectService.getRealTimeProjects(this.page, this.size).subscribe({
        next: (response: any) => {
          this.setData(response);
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
              this.setData(response);
            },
            error: (_: any) => {
              window.alert('Cannot fetch data from API');
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
              this.setData(response);
            },
            error: (_: any) => {
              window.alert('Cannot fetch data from API');
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

  ngOnInit(): void {
    const activeFunction = this.cbFetchingArray[this.activeFunctionName];
    if (activeFunction) {
      activeFunction();
    } else {
      window.alert('Bad request');
    }
  }

  openDialog(): void {
    const dialogComponent = this.dialogComponents[this.activeFunctionName];
    const dialogRef = this._dialog.open(dialogComponent);
    dialogRef.afterClosed().subscribe();
  }

  setPageConfiguration(event: PageEvent): void {
    this.page = event.pageIndex;
    this.size = event.pageSize;
  }

  setData(response: any): void {
    this.dataContainer = response.content;
    this.totalPages = response.totalPages;
    this.columnContainer = Object.keys(response.content[0]).slice(0, 3);
  }
}
