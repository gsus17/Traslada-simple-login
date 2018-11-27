import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterPageComponent } from './master-page.component';
import { MaterialModule } from '../material/material.module';
import { MasterPageRoutingModule } from './master-page-routing.module';
import { MessagingModule } from '../messaging/messaging.module';

@NgModule({
  declarations: [MasterPageComponent],
  imports: [
    MessagingModule,
    CommonModule,
    MasterPageRoutingModule,
    MaterialModule
  ]
})
export class MasterPageModule { }
