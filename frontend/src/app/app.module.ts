import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTabsModule} from '@angular/material/tabs';
import {LoginFormComponent} from './components/login/login-form/login-form.component';
import {RegisterFormComponent} from './components/login/register-form/register-form.component';
import {MatButtonModule} from '@angular/material/button';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {GoogleChartsModule} from 'angular-google-charts';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthInterceptor} from './interceptors/auth.interceptor';
import {UserGuard} from './guards/user.guard';
import {JWT_OPTIONS, JwtHelperService} from '@auth0/angular-jwt';

import {MatMenuModule} from '@angular/material/menu';

import {MatDialogModule} from '@angular/material/dialog';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatListModule} from '@angular/material/list';
import {DashButtonComponent} from "./components/dashboard/core/dashboard-nav/dash-button/dash-button.component";
import {DashboardNavComponent} from "./components/dashboard/core/dashboard-nav/dashboard-nav.component";
import {DashboardHomeComponent} from "./components/dashboard/pages/dashboard-home/dashboard-home.component";

import {DashboardTicketsComponent} from "./components/dashboard/pages/dashboard-tickets/dashboard-tickets.component";
import {DashboardProjectComponent} from "./components/dashboard/pages/dashboard-project/dashboard-project.component";
import { DashContentComponent } from './components/dashboard/core/dash-content/dash-content.component';
import { ButtonComponent } from './components/dashboard/core/dash-content/button/button.component';
import { DashDialogComponent } from './components/dashboard/core/dash-content/dash-dialog/dash-dialog.component';
import { DashStatsComponent } from './components/dashboard/pages/dashboard-home/dash-stats/dash-stats.component';
import { DashTableComponent } from './components/dashboard/core/dash-content/dash-table/dash-table.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginFormComponent,
    RegisterFormComponent,
    DashboardComponent,
    DashButtonComponent,
    DashContentComponent,
    DashStatsComponent,
    DashboardNavComponent,
    DashboardHomeComponent,
    ButtonComponent,
    DashDialogComponent,
    DashboardTicketsComponent,
    DashboardProjectComponent,
    DashTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatInputModule,
    MatRadioModule,
    MatCheckboxModule,
    MatTabsModule,
    MatButtonModule,
    MatSidenavModule,
    MatTableModule,
    MatPaginatorModule,
    GoogleChartsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatDialogModule,
    ScrollingModule,
    MatListModule
  ],
  providers: [
    provideAnimationsAsync(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
    UserGuard

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
