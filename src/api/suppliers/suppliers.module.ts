import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuppliersApiService } from './suppliers.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    CommonModule
  ],
  providers: [
    SuppliersApiService
  ]
})
export class SuppliersApiModule { }
