import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TicketService {
  constructor(private readonly _httpClient: HttpClient) {}
  getTickets(projectName: string, page: number = 0, size: number = 5) {
    const params: HttpParams = new HttpParams()
      .set('projectName', projectName)
      .set('page', page)
      .set('size', size);
    return this._httpClient.get(`${environment.apiUrl}/project-tickets`, {
      params: params,
    });
  }

  public hideOption: Subject<boolean> = new Subject();
  public hideOption$ = this.hideOption.asObservable();

  public sendHideOption() {
    this.hideOption.next(true);
  }
}
