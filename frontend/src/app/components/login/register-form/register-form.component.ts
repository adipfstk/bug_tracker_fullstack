import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css',
})
export class RegisterFormComponent {
  hide: boolean = true;

  inputs: FormGroup = new FormGroup({
    firstname: new FormControl('', [Validators.minLength(3), Validators.maxLength(30), Validators.required]),
    lastname: new FormControl('', [Validators.minLength(3), Validators.maxLength(30), Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
    password: new FormControl('', [Validators.pattern(/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])[A-Za-z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+$/), Validators.required, Validators.minLength(5)]), // Corrected password pattern
  });

  fieldValidity(field: string) : boolean | undefined {
    return !this.inputs.get(field)?.valid 
      && this.inputs.get(field)?.touched
  }

  constructor(private authService: AuthService) {}

  submitHandler() {
    if (this.inputs.status == "VALID") {
      this.authService
        .register(this.inputs.value)
        .subscribe(() => console.log(this.inputs));
    }
    return null;
  }
}
