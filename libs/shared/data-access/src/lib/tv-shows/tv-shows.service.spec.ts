import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { InjectionToken } from '@angular/core';
import { TvShow, Season, Episode, Actor } from '@maze-tv/shared/utils';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { EnvironmentConfig, ENV_CONFIG } from '../../env-config';
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

  describe('Method: getTvShowById', () => {
    it('should return correct data with httpClient', () => {
      // Assemble
      spectator.service.apiUrl = 'http://some-api-url';
      const mockTvShow = { name: 'foo' } as unknown as TvShow;

      // Act
      const tvShow$ = spectator.service.getTvShowById(2);

      // Assert
      tvShow$.subscribe(show => {
        expect(show).toEqual(mockTvShow);
      });
      const request = controller.expectOne('http://some-api-url/2');
      request.flush(mockTvShow);
    });
  });

  describe('Method: getSeasonsByTvShow', () => {
    it('should return correct data with httpClient', () => {
      // Assemble
      spectator.service.apiUrl = 'http://some-api-url';
      const mockSeasons = [{ name: 1 }, { name: 2 }] as unknown as Season[];

      // Act
      const seasons$ = spectator.service.getSeasonsByTvShow(2);

      // Assert
      seasons$.subscribe(seasons => {
        expect(seasons).toEqual(mockSeasons);
      });
      const request = controller.expectOne('http://some-api-url/2/seasons');
      request.flush(mockSeasons);
    });
  });

  describe('Method: getEpisodesByTvShow', () => {
    it('should return correct data with httpClient', () => {
      // Assemble
      spectator.service.apiUrl = 'http://some-api-url';
      const mockEpisodes = [
        { name: 'foo' },
        { name: 'bar' }
      ] as unknown as Episode[];

      // Act
      const episodes$ = spectator.service.getEpisodesByTvShow(2);

      // Assert
      episodes$.subscribe(episodes => {
        expect(episodes).toEqual(mockEpisodes);
      });
      const request = controller.expectOne('http://some-api-url/2/episodes');
      request.flush(mockEpisodes);
    });
  });

  describe('Method: getCastByTvShow', () => {
    it('should return correct data with httpClient', () => {
      // Assemble
      spectator.service.apiUrl = 'http://some-api-url';
      const mockCast = [
        {
          person: { name: 'Jack' },
          character: { name: 'John' }
        }
      ] as unknown as Actor[];

      // Act
      const cast$ = spectator.service.getCastByTvShow(2);

      // Assert
      cast$.subscribe(cast => {
        expect(cast).toEqual(mockCast);
      });
      const request = controller.expectOne('http://some-api-url/2/cast');
      request.flush(mockCast);
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
