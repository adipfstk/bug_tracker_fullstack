import { Component, OnInit } from '@angular/core';
import { TicketDetails } from '../../../../services/ticket.details.service';

@Component({
  selector: 'app-dashboard-project',
  templateUrl: './dashboard-project.component.html',
  styleUrl: './dashboard-project.component.css',
})
export class DashboardProjectComponent implements OnInit{
  constructor(private readonly hideTicketService: TicketDetails) {}
  ngOnInit(): void {
    this.hideTicketService.hideOption$.subscribe(next=> this.hide = next)
  }

  hide!: boolean;


}
