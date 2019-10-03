import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackingApiService } from './tracking.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    CommonModule
  ],
  providers: [
    TrackingApiService
  ]
})
export class TrackingApiModule { }
