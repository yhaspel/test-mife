import { ApplicationConfig, importProvidersFrom, isDevMode } from '@angular/core';
import { RouterModule, withRouterConfig } from '@angular/router';

import { TEST_MIFE_ROUTES } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      RouterModule.forRoot(TEST_MIFE_ROUTES)
    )
  ],
};
