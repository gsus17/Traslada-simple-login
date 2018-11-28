import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: './auth/login/login.module#LoginModule'
  },
  {
    path: 'master-page',
    loadChildren: './master-page/master-page.module#MasterPageModule'
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
