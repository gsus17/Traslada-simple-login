import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackingMapRoutingModule } from './tracking-map-routing.module';
import { TrackingMapComponent } from './tracking-map.component';
import { TrackingMapService } from './tracking-map.service';
import { MaterialModule } from '../material/material.module';
import { MessagingModule } from './messaging/messaging.module';

@NgModule({
  declarations: [TrackingMapComponent],
  imports: [
    MessagingModule,
    CommonModule,
    TrackingMapRoutingModule,
    MaterialModule
  ],
  providers: [
    TrackingMapService
  ]
})
export class TrackingMapModule { }
