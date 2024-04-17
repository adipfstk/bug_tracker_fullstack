import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core';
import { AuthLayoutComponent} from './layout/auth-layout/auth.component';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { SharedModule } from './shared';
import {NavbarComponent} from "./layout/nav/navbar.component";
import {NgOptimizedImage} from "@angular/common";
import {NavButtonComponent} from "./layout/nav-button/nav-button.component";
import {JwtModule} from "@auth0/angular-jwt";

@NgModule({
  declarations: [AppComponent, AuthLayoutComponent, ContentLayoutComponent, NavbarComponent, NavButtonComponent],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgOptimizedImage,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
