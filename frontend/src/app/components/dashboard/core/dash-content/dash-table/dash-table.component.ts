import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../../../../../models/project.model';
import { Ticket } from '../../../../../models/ticket.model';

@Component({
  selector: 'app-dash-table',
  templateUrl: './dash-table.component.html',
  styleUrl: './dash-table.component.css',
})
export class DashTableComponent implements OnInit {
  ngOnInit(): void {
    this.dataSource.subscribe((next) => {
      console.log(next);
      next.forEach((item) => (this.displayedColumns = Object.keys(item)));
      this.tableData = next;
    });
  }

  @Input()
  dataSource!: Observable<Project[] | Ticket[]>;

  displayedColumns!: string[];
  tableData!: Project[] | Ticket[];
}
