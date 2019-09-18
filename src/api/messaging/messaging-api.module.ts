import { NgModule } from '@angular/core';
import { MessaginApigService } from './messaging-api.service';
import { InterceptorModule } from '../interceptor/interceptor.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    InterceptorModule
  ],
  providers: [
    MessaginApigService
  ]
})
export class MessagingApiModule { }
