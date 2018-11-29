import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterPageComponent } from './master-page.component';
import { MaterialModule } from '../material/material.module';
import { MasterPageRoutingModule } from './master-page-routing.module';
import { LoginModule } from '../auth/login/login.module';

@NgModule({
  declarations: [MasterPageComponent],
  imports: [
    CommonModule,
    MasterPageRoutingModule,
    MaterialModule,
    LoginModule
  ]
})
export class MasterPageModule { }
