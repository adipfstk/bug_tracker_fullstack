import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard-nav',
  templateUrl: './dashboard-nav.component.html',
  styleUrl: './dashboard-nav.component.css'
})
export class DashboardNavComponent {
  @Input()
  buttonOptions$!: Observable<Map<string, string>>;

  constructor(private _router: Router) {}

  onLogout(): void {
    localStorage.clear();
    this._router.navigate(['']);
  }

}
