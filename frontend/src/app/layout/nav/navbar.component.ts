import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {RoleDecoder} from "../../shared/utils";

@Component({
  selector: 'app-dashboard-nav',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent implements OnInit {

  buttons: Map<string, string> = new Map()

  constructor(private _router: Router,
              private _roleDecoder: RoleDecoder) {
  }

  ngOnInit(): void {
    this.setButtons();
  }

  onLogout(): void {
    localStorage.clear();
    this._router.navigate(['']);
  }

  private setButtons(): void {
    const token: string | null = localStorage.getItem("authToken");
    if (token) {
      const role: string = this._roleDecoder.getRoles(token);
      role === 'USER' ?
        this.buttons = new Map<string, string>([
          ['desktop_windows', 'Dashboard'],
          ['article', 'Tickets'],
        ])
        :
        this.buttons = new Map<string, string>([
          ['desktop_windows', 'Dashboard'],
          ['article', 'Tickets'],
          ['admin_panel_settings', 'Administration'],
        ])
    }
  }
}
