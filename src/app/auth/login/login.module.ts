import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { LoginService } from './login.service';
import { AuthApiModule } from 'src/api/auth/auth-api.module';
import { MaterialModule } from 'src/app/material/material.module';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    AuthApiModule,
    RouterModule.forChild(routes)
  ],
  providers: [LoginService],
  declarations: [LoginComponent]
})
export class LoginModule { }
