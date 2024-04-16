import { Component, Input } from '@angular/core';
import { Project } from '../../../../../models/project.model';
import { Ticket } from '../../../../../models/ticket.model';
import { Router } from '@angular/router';
import { TicketService } from '../../../../../services/ticket.service';
import { MatTableDataSource } from '@angular/material/table';
import User from '../../../../../models/user.model';
@Component({
  selector: 'app-dash-table',
  templateUrl: './dash-table.component.html',
  styleUrl: './dash-table.component.css',
})
export class DashTableComponent {
  constructor(
    private readonly router: Router,
    private readonly _ticketService: TicketService
  ) {}

  changePage(data: any) {
    if ('name' in data) {
      this.router.navigate(['/dashboard/project'], {
        queryParams: { projectName: data['name'] },
      });
    }

    if ('status' in data) {
      console.log(data);
      this._ticketService.sendData(data);
    }
  }

  @Input()
  tableData!: MatTableDataSource<Project[] | Ticket[] | User[]>;

  @Input()
  displayedColumns!: string[];
}
