import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

export interface AppSettings {
  appName: string;
  version: string;
}

export interface FeatureFlags {
  enableNewCatalog: boolean;
  enableUserReviews: boolean;
  enableDarkMode: boolean;
}

export interface EnvironmentConfig {
  production: boolean;
  apiUrl: string;
  mockMode: boolean;
  featureFlags: FeatureFlags;
  appSettings: AppSettings;
}

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {
  readonly config: EnvironmentConfig = environment;

  constructor() { }
}