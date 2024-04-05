import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {UserGuard} from './guards/user.guard';

const routes: Routes = [

  {
    path: "manage",
    component: DashboardComponent,
    canActivate: [UserGuard]

  },
  {
    path: '',
    component: LoginComponent,

  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
