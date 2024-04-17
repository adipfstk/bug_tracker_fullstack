import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment.development';
import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Ticket} from '../models';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  fullTicket: Subject<Ticket> = new Subject();
  fullTicket$: Observable<Ticket> = this.fullTicket.asObservable();

  constructor(private readonly _httpClient: HttpClient) {
  }

  getTickets(projectName: string, page: number = 0, size: number = 5): Observable<Ticket> {
    const params: HttpParams = new HttpParams()
      .set('projectName', projectName)
      .set('page', page)
      .set('size', size);
    return this._httpClient.get<Ticket>(`${environment.apiUrl}/project-tickets`, {
      params: params,
    });
  }

  sendData(ticket: Ticket): void {
    this.fullTicket.next(ticket);
  }

}
