import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserGuard } from './guards/user.guard';
import { DashboardProjectComponent } from './components/dashboard/pages/dashboard-project/dashboard-project.component';
import { DashboardHomeComponent } from './components/dashboard/pages/dashboard-home/dashboard-home.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [UserGuard],
    children: [
      {
        path: 'project',
        component: DashboardProjectComponent,
      },
      {
        path: '',
        component: DashboardHomeComponent,
      },
    ],
  },
  {
    path: '',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
