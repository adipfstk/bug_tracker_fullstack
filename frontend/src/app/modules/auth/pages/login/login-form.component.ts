import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../../../core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent implements OnInit {
  hide: boolean = true;
  submitData: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private _authenticationService: AuthService,
    private _router: Router,
    private _activeRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    localStorage.clear();
  }

  submitHandler(): void {
    this._authenticationService
      .login(this.submitData.value)
      .subscribe((authToken: string): void => {
        localStorage.setItem('authToken', authToken);
        this._router.navigate(['home'], {relativeTo: this._activeRoute.parent})
      });
  }
}
