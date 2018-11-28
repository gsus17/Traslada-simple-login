import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AuthApiService } from './auth-api.service';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    HttpModule,
    CommonModule
  ],
  providers: [
    AuthApiService
  ]
})
export class AuthApiModule { }
