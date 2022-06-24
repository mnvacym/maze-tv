import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { InjectionToken } from '@angular/core';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { EnvironmentConfig, ENV_CONFIG } from '../env-config';
import { TvShow } from '../types';
import { TvShowsService } from './tv-shows.service';

describe('TvShowsService', () => {
  let spectator: SpectatorService<TvShowsService>;
  let controller: HttpTestingController;

  const createService = createServiceFactory({
    service: TvShowsService,
    providers: [
      {
        provide: ENV_CONFIG,
        useValue: new InjectionToken<EnvironmentConfig>('Environment config')
      }
    ],
    imports: [HttpClientTestingModule]
  });

  beforeEach(() => {
    spectator = createService();
    controller = spectator.inject(HttpTestingController);
  });

  afterEach(() => {
    controller.verify();
  });

  it('should be created', () => {
    expect(spectator.service).toBeTruthy();
  });

  describe('Method: getAllTvShows', () => {
    it('should return correct data with httpClient', () => {
      // Assemble
      spectator.service.apiUrl = 'http://some-api-url';
      const mockTvShows = [
        { name: 'foo' },
        { name: 'bar' }
      ] as unknown as TvShow[];

      // Act
      const tvShows$ = spectator.service.getAllTvShows();

      // Assert
      tvShows$.subscribe(tvShows => {
        expect(tvShows).toEqual(mockTvShows);
      });
      const request = controller.expectOne('http://some-api-url');
      request.flush(mockTvShows);
    });
  });

  describe('Method: getGenres', () => {
    it('should return correct data with httpClient', () => {
      // Assemble
      spectator.service.apiUrl = 'http://some-api-url';
      const mockTvShows = [
        { name: 'foo', genres: ['action', 'drama'] },
        { name: 'bar', genres: ['action', 'comedy'] }
      ] as unknown as TvShow[];

      // Act
      const genres$ = spectator.service.getGenres();

      // Assert
      const expected = ['action', 'comedy', 'drama'];
      genres$.subscribe(genres => {
        expect(genres).toEqual(expected);
      });
      const request = controller.expectOne('http://some-api-url');
      request.flush(mockTvShows);
    });
  });

  describe('Method: extractGenres', () => {
    it('should extract and return correct genres', () => {
      // Assemble
      const mockTvShows = [
        { name: 'foo', genres: ['action', 'drama'] },
        { name: 'bar', genres: ['action', 'comedy'] }
      ] as unknown as TvShow[];

      // Act
      const result = spectator.service.extractGenres(mockTvShows);

      // Assert
      const expected = ['action', 'drama', 'action', 'comedy'];
      expect(result).toEqual(expected);
    });
  });
});
