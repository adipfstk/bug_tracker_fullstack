import {ActivatedRouteSnapshot, CanActivate } from "@angular/router";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn:"root"
})
export class ProjectGuard implements CanActivate{
    canActivate(
        next: ActivatedRouteSnapshot) {
        const projectName = next.queryParams['projectName'];
        if (!projectName) {
          return false;
        }
        return true;
    }
}
