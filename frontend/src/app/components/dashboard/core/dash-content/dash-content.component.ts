import { Component, Inject, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { Project } from '../../../../models/project.model';

@Component({
  selector: 'app-dash-con',
  templateUrl: './dash-content.component.html',
  styleUrls: ['./dash-content.component.css'],
})
export class DashContentComponent implements OnInit {
 
  title: string = '';
  dataSource: Subject<Project[]> = new Subject();
  dataSource$ = this.dataSource.asObservable();

  constructor(
    @Inject('SERVICE') public service: any,
    private dialog: MatDialog
  ) {
    this.title = this.service.title;
  }

  ngOnInit(): void {
    this.fetchProjects();
  }

  fetchProjects(page: number = 0, size: number = 5): void {
    this.service.dataService.getRealTimeProjects(page, size).subscribe({
      next: (response: any) => {
        this.dataSource.next(response.content);
      },
      error: (error: any) => {
        console.error('Error fetching data from API:', error);
        window.alert('Cannot fetch data from API');
      },
    });
  }

  onChangePage(event: PageEvent): void {
    this.fetchProjects(event.pageIndex, event.pageSize);
  }

  openDialog() {
    const dialogRef = this.dialog.open(this.service.dialogReferencedComponent);
    dialogRef.afterClosed().subscribe();
  }
}
