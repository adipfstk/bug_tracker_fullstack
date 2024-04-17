import {Injectable} from '@angular/core';
import {CanActivate, Router,} from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn:"root"
})
export class UserGuard implements CanActivate {
  constructor(private _jwtHelper: JwtHelperService, private _router: Router) {
  }

  canActivate(): boolean {
    return !this._jwtHelper.isTokenExpired(localStorage.getItem('authToken'));
  }
}
