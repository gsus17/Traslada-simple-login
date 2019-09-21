import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrackingMapComponent } from './tracking-map.component';

const routes: Routes = [
  {
    path: '',
    component: TrackingMapComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrackingMapRoutingModule { }
