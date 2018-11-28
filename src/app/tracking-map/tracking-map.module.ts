import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrackingMapRoutingModule } from './tracking-map-routing.module';
import { TrackingMapComponent } from './tracking-map.component';
import { TrackingMapService } from './tracking-map.service';

@NgModule({
  declarations: [TrackingMapComponent],
  imports: [
    CommonModule,
    TrackingMapRoutingModule
  ],
  providers: [
    TrackingMapService
  ]
})
export class TrackingMapModule { }
