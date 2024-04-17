import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthLayoutComponent {
  private readonly REGISTER: number = 1;
  private readonly LOGIN:number = 0;
  constructor(private readonly _router: Router, private _route: ActivatedRoute) {
  }

  tabChanged(index: number) {
    if (index === this.LOGIN) {
      this.loginHandler();
    } else if (index === this.REGISTER) {
      this.registerHandler();
    }
  }
  registerHandler(): void {
    this._router.navigate(['./register'], { relativeTo: this._route });
  }
  loginHandler(): void {
    this._router.navigate([''], { relativeTo: this._route });
  }
}
