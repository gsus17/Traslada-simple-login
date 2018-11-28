import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { MessaginApigService } from './messaging-api.service';
import { InterceptorModule } from '../interceptor/interceptor.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    HttpModule,
    HttpClientModule,
    CommonModule,
    InterceptorModule
  ],
  providers: [
    MessaginApigService
  ]
})
export class MessagingApiModule { }
