import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriverAttendanceComponent } from './driver-attendance.component';
import { DriverAttendanceService } from './driver-attendance.service';
import { DriverApiModule } from 'src/api/driver/driver.module';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [DriverAttendanceComponent],
  imports: [
    MaterialModule,
    DriverApiModule,
    CommonModule
  ],
  providers: [
    DriverAttendanceService
  ],
  exports: [
    DriverAttendanceComponent
  ]
})
export class DriverAttendanceModule { }
