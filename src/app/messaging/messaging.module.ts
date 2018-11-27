import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagingComponent } from './messaging.component';

@NgModule({
  declarations: [MessagingComponent],
  imports: [
    CommonModule
  ],
  exports: [
    MessagingComponent
  ]
})
export class MessagingModule { }
