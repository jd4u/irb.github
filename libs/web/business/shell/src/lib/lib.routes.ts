import { Route } from '@angular/router';
import { BusinessShellComponent } from './business-shell.component';

export const businessShellRoutes: Route[] = [
  {
    path: '',
    component: BusinessShellComponent,
    //redirectTo: 'contacts',
    children: [
      {
        path: 'contacts',
        loadChildren: () => {
          console.log('loading contacts route!');
          return import('@irbweb/contacts-shell').then(
            (s) => s.contactsShellRoutes,
          );
        },
        outlet: 'mybusiness',
      },
      {
        path: 'projects',
        loadChildren: () => {
          console.log('loading proejcts route!');
          return import('@irbweb/projects-shell').then(
            (s) => s.projectsShellRoutes,
          );
        },
        outlet: 'mybusiness',
      },
      {
        path: 'teams',
        loadChildren: () => {
          console.log('loading teams route!');
          return import('@irbweb/teams-shell').then((s) => s.teamsShellRoutes);
        },
        outlet: 'mybusiness',
        pathMatch: 'prefix',
      },
    ],
  },
];
