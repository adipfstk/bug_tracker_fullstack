import {ActivatedRouteSnapshot, CanActivate } from "@angular/router";

export class ProjectGuard implements CanActivate{
    canActivate(
        next: ActivatedRouteSnapshot) {
        const projectName = next.queryParams['projectName'];
        console.log(projectName)
        if (!projectName) {
          console.log('No projectName query parameter found. Navigation prevented.');
          return false;
        }
        return true;
    }
}