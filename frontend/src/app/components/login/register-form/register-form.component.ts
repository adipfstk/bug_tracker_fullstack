import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css',
})
export class RegisterFormComponent {
  hide: boolean = true;

  inputs: FormGroup = new FormGroup({
    firstname: new FormControl('', [
      Validators.minLength(3),
      Validators.maxLength(30),
      Validators.required,
    ]),
    lastname: new FormControl('', [
      Validators.minLength(3),
      Validators.maxLength(30),
      Validators.required,
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  fieldValidity(field: string): boolean | undefined {
    return !this.inputs.get(field)?.valid && this.inputs.get(field)?.touched;
  }

  constructor(
    private _authService: AuthService,
    private _snackBar: MatSnackBar
  ) {}

  submitHandler() {
    localStorage.clear()
    return this.inputs.status == 'VALID'
      ? this._authService
          .register(this.inputs.value)
          .subscribe(() =>
            this._snackBar.open(
              'You succesfully created a new account',
              'Close'
            )
          )
      : null;
  }
}
