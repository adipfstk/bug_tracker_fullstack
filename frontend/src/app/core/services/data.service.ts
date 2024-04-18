import { Injectable } from '@angular/core';
import { ProjectService } from './project.service';
import { UserService } from './user.service';
import { TicketService } from './ticket.service';

const DEFAULT_PAGE_NO = 0;
const DEFAULT_PAGE_SIZE = 5;

@Injectable({
  providedIn: 'root',
})
export class DataService {
  projects(page: number = DEFAULT_PAGE_NO, size: number = DEFAULT_PAGE_SIZE) {
    return this._projectService.getRealTimeProjects(page, size);
  }

  tickets(
    projectName: string,
    page: number = DEFAULT_PAGE_NO,
    size: number = DEFAULT_PAGE_SIZE
  ) {
    return this._ticketService.getTickets(projectName, page, size);
  }

  members(
    projectName: string,
    page: number = DEFAULT_PAGE_NO,
    size: number = DEFAULT_PAGE_SIZE
  ) {
    return this._userService.getUsersByProjectName(projectName, page, size);
  }

  constructor(
    private _projectService: ProjectService,
    private _userService: UserService,
    private _ticketService: TicketService
  ) {}
}
