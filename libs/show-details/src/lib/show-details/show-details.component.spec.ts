import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TvShowsService } from '@maze-tv/shared/data-access';
import {
  createComponentFactory,
  mockProvider,
  Spectator
} from '@ngneat/spectator/jest';
import { ShowDetailsComponent } from './show-details.component';

describe('ShowDetailsComponent', () => {
  let spectator: Spectator<ShowDetailsComponent>;

  const createComponent = createComponentFactory({
    component: ShowDetailsComponent,
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    declarations: [ShowDetailsComponent],
    mocks: [TvShowsService],
    providers: [
      mockProvider(ActivatedRoute, {
        snapshot: {
          params: {
            id: 'example-id'
          }
        }
      })
    ],
    detectChanges: false
  });

  beforeEach(() => (spectator = createComponent()));

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  describe('Method: ngOnInit', () => {
    it('should call correct methods at initialization', () => {
      // Assemble
      const tvShowsService = spectator.inject(TvShowsService);
      const getTvShowById = jest.spyOn(tvShowsService, 'getTvShowById');
      const getCastByTvShow = jest.spyOn(tvShowsService, 'getCastByTvShow');
      const getSeasonsByTvShow = jest.spyOn(
        tvShowsService,
        'getSeasonsByTvShow'
      );
      const getEpisodesByTvShow = jest.spyOn(
        tvShowsService,
        'getEpisodesByTvShow'
      );

      // Act
      spectator.component.ngOnInit();

      // Assert
      expect(getTvShowById).toHaveBeenCalledTimes(1);
      expect(getCastByTvShow).toHaveBeenCalledTimes(1);
      expect(getSeasonsByTvShow).toHaveBeenCalledTimes(1);
      expect(getEpisodesByTvShow).toHaveBeenCalledTimes(1);
    });

    it('should call methods with correct id', () => {
      // Assemble
      const tvShowsService = spectator.inject(TvShowsService);
      const getTvShowById = jest.spyOn(tvShowsService, 'getTvShowById');
      const getCastByTvShow = jest.spyOn(tvShowsService, 'getCastByTvShow');
      const getSeasonsByTvShow = jest.spyOn(
        tvShowsService,
        'getSeasonsByTvShow'
      );
      const getEpisodesByTvShow = jest.spyOn(
        tvShowsService,
        'getEpisodesByTvShow'
      );

      // Act
      spectator.component.ngOnInit();

      // Assert
      const expectedId = 'example-id';
      expect(getTvShowById).toHaveBeenCalledWith(expectedId);
      expect(getCastByTvShow).toHaveBeenCalledWith(expectedId);
      expect(getSeasonsByTvShow).toHaveBeenCalledWith(expectedId);
      expect(getEpisodesByTvShow).toHaveBeenCalledWith(expectedId);
    });
  });
});
