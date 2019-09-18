import { Routes } from '@angular/router';
import { MasterPageComponent } from './master-page/master-page.component';

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'master-page',
    // loadChildren: './master-page/master-page.module#MasterPageModule',
    component: MasterPageComponent,
    children: [
      {
        path: 'tracking',
        loadChildren: () => import('./tracking-map/tracking-map.module').then(m => m.TrackingMapModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];
