import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {DataService} from '../../../services/data.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent implements OnInit {
  hide: boolean = true;
  constructor(
    private _authenticationService: AuthService,
    private _router: Router,
    private _dataService: DataService
  ) {}
  ngOnInit(): void {
    localStorage.clear();
  }

  submitData: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  submitHandler() {
    this._authenticationService
      .login(this.submitData.value)
      .subscribe((authToken) => {
        localStorage.setItem('authToken', authToken);
        const token = localStorage.getItem('authToken');
        if (token != null) {
          this._dataService.updateMenu(token);
        }
        this._router.navigate(['/manage']);
      });
  }
}
