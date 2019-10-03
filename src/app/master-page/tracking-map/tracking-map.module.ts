import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackingMapRoutingModule } from './tracking-map-routing.module';
import { TrackingMapComponent } from './tracking-map.component';
import { MaterialModule } from '../../material/material.module';
import { MessagingModule } from './messaging/messaging.module';
import { DriverAttendanceModule } from './driver-attendance/driver-attendance.module';
import { SuppliersApiModule } from 'src/api/suppliers/suppliers.module';
import { TrackingApiModule } from 'src/api/tracking/tracking.module';
import { NgxsModule } from '@ngxs/store';
import { TrackingState } from './store/tracking-map.state';

@NgModule({
  declarations: [TrackingMapComponent],
  imports: [
    MessagingModule,
    DriverAttendanceModule,
    CommonModule,
    TrackingMapRoutingModule,
    MaterialModule,
    SuppliersApiModule,
    TrackingApiModule,
    NgxsModule.forFeature([TrackingState]),
  ],
  providers: []
})
export class TrackingMapModule { }
