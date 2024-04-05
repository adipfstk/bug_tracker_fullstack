import {Injectable} from "@angular/core";
import {JwtHelperService} from "@auth0/angular-jwt";
import {BehaviorSubject} from "rxjs";

@Injectable({
    providedIn: "root"
})
export class DataService {
    data = new BehaviorSubject<any>(null);
    data$ = this.data.asObservable();

    constructor(private _jwtHelper: JwtHelperService) {
        let authToken = localStorage.getItem("authToken");
        if(authToken) {
            this.updateMenu(authToken);
        }
    }

    updateMenu(authToken: string): void {
        this.data.next(this.getClaim(authToken));
    }

    getClaim(authToken: string) {
        return this._jwtHelper.decodeToken(authToken);
    }
}
