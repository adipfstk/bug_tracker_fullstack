import { Component, OnInit } from '@angular/core';

import { PageEvent } from '@angular/material/paginator';
import ProjectService from '../../../../services/project.sevice';
import { Project } from '../../../../models/project.model';

@Component({
  selector: 'app-dash-con',
  templateUrl: './dash-content.component.html',
  styleUrl: './dash-content.component.css',
})
export class DashContentComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'description'];
  fetchedData!: Project[];
  metaData!: any;

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.fetchProjects();
  }

  fetchProjects(page: number = 0, size: number = 5): void {
    this.projectService.getProjects(page, size).subscribe({
      next: (response:any) => {
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
