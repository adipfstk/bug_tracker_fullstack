import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment.development';
import {ProjectDto} from '../models';
import {BehaviorSubject, Observable, switchMap} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {


  refreshData$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private _httpClient: HttpClient, private _router: Router) {
  }

  getProjects(page: number = 0, size: number = 5) {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    return this._httpClient.get<any>(`${environment.apiUrl}/projects`, {params});
  }

  getRealTimeProjects(page: number = 0, size: number = 5) {
    return this.refreshData$.pipe(switchMap(_ => this.getProjects(page, size)))
  }

  postNewProject(payload: ProjectDto): Observable<ProjectDto> {
    let obs$ = this._httpClient.post<ProjectDto>(
      `${environment.apiUrl}/project`,
      payload
    );
    return obs$;

  }

}
