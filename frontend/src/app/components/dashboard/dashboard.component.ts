import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

enum UserRoles {
  USER,
  ADMIN,
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  buttonOptions: BehaviorSubject<Map<string, string>> = new BehaviorSubject(
    new Map<string, string>()
  );
  buttonOptions$: Observable<Map<string, string>> =
    this.buttonOptions.asObservable();

  constructor(private _dataService: DataService, private _router: Router) {
  }

  ngOnInit(): void {
    this._dataService.data$.subscribe((next) => {
      const role = next.roles['authority'];
      if (role === UserRoles[UserRoles.USER]) {
        console.log(role);
        this.buttonOptions.next(
          new Map<string, string>([
            ['desktop_windows', 'Dashboard'],
            ['article', 'Tickets'],
          ])
        );
      } else if (role === UserRoles[UserRoles.ADMIN]) {
        this.buttonOptions.next(
          new Map<string, string>([
            ['desktop_windows', 'Dashboard'],
            ['article', 'Tickets'],
            ['admin_panel_settings', 'Administration'],
          ])
        );
      }
    });
  }

}
