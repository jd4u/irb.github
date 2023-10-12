import { Route } from '@angular/router';
import { NotFoundComponent } from './not.found.component';

console.info('app.routes loaded');

export const appRoutes: Route[] = [
  { path: '', redirectTo: 'business', pathMatch: 'full' },
  {
    path: 'business',
    loadComponent: () =>
      import('@irbweb/business-shell').then((m) => m.BusinessShellComponent),
  },
  {
    path: 'user',
    loadComponent: () =>
      import('@irbweb/user-shell').then((m) => m.UserShellComponent),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
