import { Route } from '@angular/router';
import { BusinessShellComponent } from './business-shell.component';

export const businessShellRoutes: Route[] = [
  {
    path: '',
    component: BusinessShellComponent,
    children: [
      {
        path: 'contacts',
        loadChildren: () => {
          console.log('loading contacts route!');
          return import('@irbweb/contacts-shell').then(
            (s) => s.contactsShellRoutes,
          );
        },
        outlet: 'b',
      },
      {
        path: 'projects',
        loadChildren: () => {
          console.log('loading proejcts route!');
          return import('@irbweb/projects-shell').then(
            (s) => s.projectsShellRoutes,
          );
        },
        outlet: 'b',
      },
      {
        path: 'teams',
        loadChildren: () => {
          console.log('loading teams route!');
          return import('@irbweb/teams-shell').then((s) => s.teamsShellRoutes);
        },
        outlet: 'b',
        pathMatch: 'prefix',
      },
    ],
  },
];
