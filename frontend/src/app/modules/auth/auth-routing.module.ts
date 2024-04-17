import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegisterFormComponent} from "./pages/register/register-form.component";
import {AuthLayoutComponent} from "../../layout/auth-layout/auth.component";
import {LoginFormComponent} from "./pages/login/login-form.component";

const routes: Routes = [
  {
    path: '',
    component: LoginFormComponent
  },
  {
    path: 'register',
    component: RegisterFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
