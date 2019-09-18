import { NgModule } from '@angular/core';
import { AuthApiService } from './auth-api.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule
  ],
  providers: [
    AuthApiService
  ]
})
export class AuthApiModule { }
