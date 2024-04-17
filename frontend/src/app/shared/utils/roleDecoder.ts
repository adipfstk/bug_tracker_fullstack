import {JwtHelperService} from "@auth0/angular-jwt";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class RoleDecoder {
  constructor(private _jwtHelper: JwtHelperService) {
  }
  getRoles(authToken: string): string {
    const DECODED_TOKEN = this._jwtHelper.decodeToken(authToken);
    return DECODED_TOKEN['roles']['authority'];
  }
}
