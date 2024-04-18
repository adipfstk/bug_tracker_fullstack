import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../../../core/models/ticket.model';
import { TicketService } from '../../../../core';

@Component({
  selector: 'dashboard-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
})
export class ProjectComponent implements OnInit {
  data!: Ticket;


  readonly TICKET_PAGE = 'Tickets';
  readonly PROJECT_PAGE = 'Projects';


  constructor(private readonly _ticketService: TicketService) {}

  ngOnInit(): void {
    this._ticketService.fullTicket$.subscribe((next) => (this.data = next));
  }
}
