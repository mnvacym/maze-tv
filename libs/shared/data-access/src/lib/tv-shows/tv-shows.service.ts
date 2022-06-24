import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { EnvironmentConfig, ENV_CONFIG } from '../env-config';
import { TvShow } from '../types';

@Injectable({
  providedIn: 'root'
})
export class TvShowsService {
  public apiUrl: string;

  constructor(
    @Inject(ENV_CONFIG) private envConfig: EnvironmentConfig,
    @Inject(HttpClient) private httpClient: HttpClient
  ) {
    this.apiUrl = this.envConfig.tvShowsApi;
  }

  getAllTvShows() {
    return this.httpClient.get(this.apiUrl) as Observable<TvShow[]>;
  }
}
