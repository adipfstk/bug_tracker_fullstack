import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../../../../../models/project.model';
import { Ticket } from '../../../../../models/ticket.model';
import { Router } from '@angular/router';
import { TicketService } from '../../../../../services/ticket.service';
@Component({
  selector: 'app-dash-table',
  templateUrl: './dash-table.component.html',
  styleUrl: './dash-table.component.css',
})
export class DashTableComponent implements OnInit {
  constructor(private readonly router: Router, private readonly _ticketService: TicketService) {}
  ngOnInit(): void {
    this.dataSource.subscribe((next) => {
      next.forEach((item) => (this.displayedColumns = Object.keys(item)));
      this.tableData = next;
    });
  }

  changePage(data: any) {
    if('name' in data) {
      this.router.navigate(['/dashboard/project'], {
        queryParams: { projectName: data['name'] },
      });
    }

    if ('title' in data) {
      this._ticketService.sendHideOption();
    }
  }

  @Input()
  dataSource!: Observable<Project[] | Ticket[]>;

  displayedColumns!: string[];
  tableData!: any[];
}
