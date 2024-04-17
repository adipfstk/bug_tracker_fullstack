import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private _httpClient: HttpClient) {
  }

  getBenchUsers() {
    return this._httpClient.get(`${environment.apiUrl}/benchUsers`);
  }

  getUsersByProjectName(
    projectName: string,
    page: number = 0,
    size: number = 5
  ) {
    const params: HttpParams = new HttpParams()
      .set('projectName', projectName)
      .set('page', page.toString())
      .set('size', size.toString());

    return this._httpClient.get(`${environment.apiUrl}/project-members`, {
      params: params,
    });
  }
}
