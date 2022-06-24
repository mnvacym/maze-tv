import { InjectionToken } from '@angular/core';

export interface EnvironmentConfig {
  production: boolean;
  tvShowsApi: string;
}

export const ENV_CONFIG: InjectionToken<EnvironmentConfig> =
  new InjectionToken<EnvironmentConfig>('Environment config');
