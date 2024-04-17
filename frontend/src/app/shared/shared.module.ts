import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { GoogleChartsModule } from 'angular-google-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthInterceptor} from "../core/interceptors/auth.interceptor";

@NgModule({
  declarations: [],
  imports: [CommonModule, MaterialModule, GoogleChartsModule],
  exports: [
    MaterialModule,
    GoogleChartsModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollingModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi:true
    }
  ]
})
export class SharedModule {}
