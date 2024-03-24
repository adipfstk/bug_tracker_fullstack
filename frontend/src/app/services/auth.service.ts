import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";
import { Injectable } from "@angular/core";
import User from "../models/user.model";

@Injectable({
    providedIn:"root"
})

export class AuthService {

    constructor(private http:HttpClient) {
    }

    register(userEntity: User): Observable<User> {
        return this.http.post<User>(`${environment.apiUrl}/user`, userEntity);
    }
}
