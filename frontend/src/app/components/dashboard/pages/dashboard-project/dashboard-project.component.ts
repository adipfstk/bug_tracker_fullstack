import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../../../services/ticket.service';
import { Ticket } from '../../../../models/ticket.model';

@Component({
  selector: 'app-dashboard-project',
  templateUrl: './dashboard-project.component.html',
  styleUrl: './dashboard-project.component.css',
})
export class DashboardProjectComponent implements OnInit {
  constructor(
    private readonly _ticketService: TicketService
  ) {}
  ngOnInit(): void {
    this._ticketService.fullTicket$.subscribe((next) => (this.data = next));
  }

  data!: Ticket;
}
