import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import {Project, Ticket, TicketService} from '../../../../core';
import User from '../../../../core/models/user.model';


@Component({
  selector: 'dash-table',
  templateUrl: './dash-table.component.html',
  styleUrl: './dash-table.component.css',
})
export class DashTableComponent {
  @Input()
  tableData!: MatTableDataSource<Project[] | Ticket[] | User[]>;
  @Input()
  displayedColumns!: string[];

  constructor(
    private readonly router: Router,
    private readonly _ticketService: TicketService,
    private readonly _activeRoute: ActivatedRoute
  ) {
  }

  changePage(data: any): void {
    if ('name' in data) {
      this.router.navigate(['project'], {
        relativeTo: this._activeRoute.parent,
        queryParams: {projectName: data['name']},
      });
    }

    if ('status' in data) {
      this._ticketService.sendData(data);
    }
  }
}
