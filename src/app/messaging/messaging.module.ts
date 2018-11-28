import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagingComponent } from './messaging.component';
import { MessagingService } from './messaging.service';
import { MessagingApiModule } from 'src/api/messaging/messaging-api.module';

@NgModule({
  declarations: [MessagingComponent],
  imports: [
    CommonModule,
    MessagingApiModule
  ],
  providers: [
    MessagingService
  ],
    exports: [
      MessagingComponent
    ],
})
export class MessagingModule { }
