import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export default class ProjectService {
  private apiControllerUrl = `${environment.apiUrl}/items`;

  constructor(private httpClient: HttpClient) {}

  getProjects(page: number = 0, size: number = 5) {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    return this.httpClient.get<any>(this.apiControllerUrl, { params });
  }
}
