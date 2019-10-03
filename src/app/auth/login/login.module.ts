import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { AuthApiModule } from 'src/api/auth/auth-api.module';
import { MaterialModule } from 'src/app/material/material.module';
import { LogingRoutingModule } from './login-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { AuthState } from '../store/auth.state';
import { NgxsModule } from '@ngxs/store';

@NgModule({
  imports: [
    CommonModule,
    LogingRoutingModule,
    MaterialModule,
    TranslateModule,
    AuthApiModule,
    NgxsFormPluginModule.forRoot(),
    NgxsModule.forFeature([AuthState]),
  ],
  providers: [],
  declarations: [LoginComponent]
})
export class LoginModule { }
