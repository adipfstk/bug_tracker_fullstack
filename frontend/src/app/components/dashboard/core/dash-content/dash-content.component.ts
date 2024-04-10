import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReplaySubject } from 'rxjs'; 
import { Project } from '../../../../models/project.model';
import { ProjectService } from '../../../../services/project.service';
import { DashDialogComponent } from './dash-dialog/dash-dialog.component';
import { Ticket } from '../../../../models/ticket.model';

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

  @Input()
  activeFunctionName!: string;

  cbFetchingArray: any = {
    projects: (page: number = 0, size: number = 5): void => {
      this._projectService.getRealTimeProjects(page, size).subscribe({
        next: (response: any) => {
          this.dataSource.next(response.content);
        },
        error: (_: any) => {
          window.alert('Cannot fetch data from API');
        },
      });
    },
    tickets: (page: number = 0, size: number = 5): void => {
      const tickets: Ticket[] = [
        new Ticket("Adrian", "Test"),
        new Ticket("John", "Issue"),
      ];
      this.dataSource.next(tickets);
    },
  };

  dialogComponents: any = {
    projects: DashDialogComponent,
    tickets: DashDialogComponent,
  };

  constructor(
    private _projectService: ProjectService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    const activeFunction = this.cbFetchingArray[this.activeFunctionName];
    if (activeFunction) {
      activeFunction();
    } else {
      window.alert("Bad request")
    }
  }

  openDialog() {
    const dialogComponent = this.dialogComponents[this.activeFunctionName];
    const dialogRef = this.dialog.open(dialogComponent);
    dialogRef.afterClosed().subscribe();
  }
}
