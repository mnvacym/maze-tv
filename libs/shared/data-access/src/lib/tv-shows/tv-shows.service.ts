import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Actor, Episode, Season, TvShow } from '@maze-tv/shared/utils';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { EnvironmentConfig, ENV_CONFIG } from '../../env-config';

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
   * @description Gets tv show object based on id
   * @param id id of the tv show
   */
  getTvShowById(id: number): Observable<TvShow> {
    return this.httpClient.get<TvShow>(`${this.apiUrl}/${id}`);
  }

  /**
   * @description Gets seasons for a specific tv show
   * @param id id of the tv show
   */
  getSeasonsByTvShow(id: number): Observable<Season[]> {
    return this.httpClient.get<Season[]>(`${this.apiUrl}/${id}/seasons`);
  }

  /**
   * @description Gets episodes for a specific tv show
   * @param id id of the tv show
   */
  getEpisodesByTvShow(id: number): Observable<Episode[]> {
    return this.httpClient.get<Episode[]>(`${this.apiUrl}/${id}/episodes`);
  }

  /**
   * @description Gets cast for a specific tv show
   * @param id id of the tv show
   */
  getCastByTvShow(id: number): Observable<Actor[]> {
    return this.httpClient.get<Actor[]>(`${this.apiUrl}/${id}/cast`);
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
