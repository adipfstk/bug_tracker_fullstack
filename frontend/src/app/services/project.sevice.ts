import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

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
