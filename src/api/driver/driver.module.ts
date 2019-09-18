import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriverApiService } from './driver.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    DriverApiService
  ]
})
export class DriverApiModule { }
