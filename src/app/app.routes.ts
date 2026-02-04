import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/find-bus/find-bus').then(m => m.FindBus)
  },
  {
    path: 'display-bus',
    loadComponent: () => import('./components/display-bus/display-bus').then(m => m.DisplayBus)
  },
  {
    path: 'passenger-detail',
    loadComponent: () => import('./components/passenger-detail/passenger-detail').then(m => m.PassengerDetail)
  },
  {
    path: 'confirm',
    loadComponent: () => import('./components/confirm/confirm').then(m => m.Confirm)
  }
];