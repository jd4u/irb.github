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
    path: '**',
    component: NotFoundComponent,
  },
];
