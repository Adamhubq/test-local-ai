import { ApplicationConfig, ErrorHandler, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { GlobalErrorHandler } from './core/services/global-error-handler';
import { CommonModule } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    importProvidersFrom(CommonModule)
  ]
};