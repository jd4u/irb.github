import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { appRoutes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { errorInterceptor } from '@irbweb/interceptors';
import { environment } from '../../environments/environment';
import { MaterialModule } from '@irbweb/material';
import { API_PREFIX, API_URL } from './api.tokens';

const appTokenProviders = [
  { provide: API_URL, useValue: environment.api_url },
  { provide: API_PREFIX, useValue: environment.api_prefix },
];

export const appConfig: ApplicationConfig = {
  providers: [
    MaterialModule,
    appTokenProviders,
    provideHttpClient(withInterceptors([errorInterceptor])),
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    provideAnimations(),
    //!environment.production ? provideStoreDevtools() : [],
    //appInitializers,
  ],
};
