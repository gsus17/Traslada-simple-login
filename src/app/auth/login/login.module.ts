import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginService } from './login.service';
import { AuthApiModule } from 'src/api/auth/auth-api.module';
import { MaterialModule } from 'src/app/material/material.module';
import { LogingRoutingModule } from './login-routing.module';

@NgModule({
  imports: [
    CommonModule,
    LogingRoutingModule,
    MaterialModule,
    AuthApiModule,
  ],
  providers: [LoginService],
  declarations: [LoginComponent]
})
export class LoginModule { }
