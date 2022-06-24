import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TvShowsService } from '@maze-tv/shared/data-access';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { LandingComponent } from './landing.component';

describe('LandingComponent', () => {
  let spectator: Spectator<LandingComponent>;

  const createComponent = createComponentFactory({
    component: LandingComponent,
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    declarations: [LandingComponent],
    mocks: [TvShowsService],
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
      const getAllTvShows = jest.spyOn(tvShowsService, 'getAllTvShows');
      const getGenres = jest.spyOn(tvShowsService, 'getGenres');

      // Act
      spectator.component.ngOnInit();

      // Assert
      expect(getAllTvShows).toHaveBeenCalledTimes(1);
      expect(getGenres).toHaveBeenCalledTimes(1);
    });
  });
});
