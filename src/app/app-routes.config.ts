import { Routes } from '@angular/router';
import { MasterPageComponent } from './master-page/master-page.component';

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: './auth/login/login.module#LoginModule'
  },
  {
    path: 'master-page',
    // loadChildren: './master-page/master-page.module#MasterPageModule',
    component: MasterPageComponent,
    children: [
      {
        path: 'tracking',
        loadChildren: './tracking-map/tracking-map.module#TrackingMapModule'
      }
    ]
  },
  {
    path: 'messaging',
    loadChildren: './messaging/messaging.module#MessagingModule'
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];
