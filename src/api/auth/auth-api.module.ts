import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthApiService } from './auth-api.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [
    AuthApiService
  ]
})
export class AuthApiModule { }
