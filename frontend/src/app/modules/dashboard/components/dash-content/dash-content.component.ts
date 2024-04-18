import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../../../../core/services/data.service';
import { Project, Ticket, TicketService } from '../../../../core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import User from '../../../../core/models/user.model';
import { Dialog } from '@angular/cdk/dialog';
import { DashDialogComponent } from '../dash-dialog/dash-dialog.component';
import { TicketDialogComponent } from '../ticket-dialog/ticket-dialog.component';

enum ContentTitle {
  Projects = 'Projects',
  Tickets = 'Tickets',
  Members = 'Members',
}

const FIRST_INDEX = 0;
const SEARCHED_PARAM = 'projectName';

@Component({
  selector: 'dash-content',
  templateUrl: './dash-content.component.html',
  styleUrls: ['./dash.content.component.css'],
})
export class DashContentComponent implements OnInit {
  @Input() title!: string;

  projectData: Project[] = [];
  ticketData: Ticket[] = [];
  membersData: User[] = [];

  projectColumns: string[] = [];
  ticketColumns: string[] = [];
  membersColumns: string[] = [];

  page!: number;
  size!: number;

  projectName!: string;

  private readonly MAX_COL_NO = 3;
  private readonly MIN_COL_NO = 0;

  constructor(
    private _dataService: DataService,
    private _ticketService: TicketService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private dialog: Dialog
  ) {}

  ngOnInit(): void {
    this.setProjectName();
    this.selectDataFetcher();
  }

  private fetchProjects(): void {
    this._dataService.projects().subscribe((paginatedProjects) => {
      this.setData(this.projectData, this.projectColumns, paginatedProjects);
      console.log(this.projectData);
    });
  }

  private fetchTickets(): void {
    this._dataService
      .tickets(this.projectName)
      .subscribe((paginatedTickets: any) => {
        this.setData(this.ticketData, this.ticketColumns, paginatedTickets);
      });
  }

  private fetchMembers(): void {
    this._dataService
      .members(this.projectName)
      .subscribe((paginatedMembers: any) => {
        this.setData(this.membersData, this.membersColumns, paginatedMembers);
      });
  }

  private setData(
    tableData: Project[] | Ticket[] | User[],
    displayedColumns: string[],
    paginatedData: any
  ) {
    tableData.push(...paginatedData.content);
    const keys: any[] = Object.keys(tableData[FIRST_INDEX]).slice(
      this.MIN_COL_NO,
      this.MAX_COL_NO
    );

    displayedColumns.push(...keys);
  }

  private setProjectName() {
    this.activeRoute.queryParams.subscribe((params) => {
      this.projectName = params[SEARCHED_PARAM];
    });
  }

  private selectDataFetcher() {
    if (this.title == ContentTitle.Projects) {
      this.fetchProjects();
    } else if (this.title == ContentTitle.Tickets) {
      this.fetchTickets();
    } else {
      this.fetchMembers();
    }
  }

  projectClickHandler(row: Project) {
    const params: Params = { projectName: row.name };
    this.router.navigate(['project'], {
      relativeTo: this.activeRoute.parent,
      queryParams: params,
    });
  }

  ticketClickHandler(row: Ticket) {
    this._ticketService.sendData(row);
  }

  projectButtonHandler() {
    this.dialog.open(DashDialogComponent)
  }

  ticketButtonHandler() {
    this.dialog.open(TicketDialogComponent)
  }
}
