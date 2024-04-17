import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthRoutingModule} from './auth-routing.module';
import {SharedModule} from '../../shared';
import {LoginFormComponent} from "./pages/login/login-form.component";
import {RegisterFormComponent} from "./pages/register/register-form.component";
import {JwtModule} from "@auth0/angular-jwt";

@NgModule({
  declarations: [
    LoginFormComponent,
    RegisterFormComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
  ]
})
export class AuthModule {
}
