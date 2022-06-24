import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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

  /**
   * @description Gets all tv shows
   */
  getAllTvShows(): Observable<TvShow[]> {
    return this.httpClient.get<TvShow[]>(this.apiUrl);
  }

  /**
   * @description Gets all unique genres
   */
  getGenres(): Observable<string[]> {
    return this.httpClient.get<TvShow[]>(this.apiUrl).pipe(
      map(tvShows => this.extractGenres(tvShows)),
      map(genres => Array.from(new Set(genres)))
    );
  }

  /**
   * @description Returns array of all genres
   * @param tvShows tv shows
   */
  extractGenres(tvShows: TvShow[]): string[] {
    return tvShows.reduce(
      (acc, show) => [...acc, ...show.genres],
      [] as string[]
    );
  }
}