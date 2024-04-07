import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';


@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private _httpClient: HttpClient) {}

  getBenchUsers() {
    return this._httpClient.get(`${environment.apiUrl}/benchUsers`);
  }


}
