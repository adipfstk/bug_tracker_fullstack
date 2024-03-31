import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import User from '../models/user.model';
import { Login } from '../models/login.model';
import { environment } from '../../environments/environment.development';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _http: HttpClient) {}

  register(userEntity: User): Observable<User> {
    return this._http.post<User>(`${environment.apiUrl}/user`, userEntity);
  }

  login(loginData: Login): Observable<string> {
    return this._http.post(`${environment.apiUrl}/auth`, loginData, {
      responseType: 'text'
    });
  }

}
