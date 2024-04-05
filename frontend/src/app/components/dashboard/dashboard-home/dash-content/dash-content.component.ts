import { Component, OnInit } from '@angular/core';

import { PageEvent } from '@angular/material/paginator';
import { ProjectService } from '../../../../services/project.service';
import { Project } from '../../../../models/project.model';
import { MatDialog } from '@angular/material/dialog';
import { DashDialogComponent } from './dash-dialog/dash-dialog.component';

@Component({
  selector: 'app-dash-con',
  templateUrl: './dash-content.component.html',
  styleUrl: './dash-content.component.css',
})
export class DashContentComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'description'];
  fetchedData!: Project[];
  metaData!: any;

  constructor(
    private _projectService: ProjectService,
    private _dialog: MatDialog,
  ) {}

  openDialog() {
    const dialogRef = this._dialog.open(DashDialogComponent);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
    this.fetchProjects();
  }

  fetchProjects(page: number = 0, size: number = 5): void {
    this._projectService.getRealTimeProjects(page, size).subscribe({
      next: (response: any) => {
        this.fetchedData = response.content;
        if (!this.metaData) {
          this.updateMetaData(
            response.pageable,
            response.totalPages,
            response.totalElements
          );
        }
      },
      error: () => {
        window.alert('Cannot fetch data from API');
      },
    });
  }

  onChangePage(event: PageEvent): void {
    this.fetchProjects(event.pageIndex, event.pageSize);
  }

  private updateMetaData(
    pageable: any,
    totalPages: number,
    totalElements: number
  ): void {
    this.metaData = {
      pageSize: pageable.pageSize,
      pageNumber: pageable.pageNumber,
      totalPages: totalPages,
      totalElements: totalElements,
    };
  }
}
