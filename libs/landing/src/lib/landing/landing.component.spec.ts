import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { TvShowsService } from '@maze-tv/shared/data-access';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { LandingComponent } from './landing.component';

describe('LandingComponent', () => {
  let spectator: Spectator<LandingComponent>;

  const createComponent = createComponentFactory({
    component: LandingComponent,
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    declarations: [LandingComponent],
    mocks: [Router, TvShowsService],
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
      const getAllTvShows = jest
        .spyOn(tvShowsService, 'getAllTvShows')
        .mockReturnValue(of([]));
      const getGenres = jest.spyOn(tvShowsService, 'getGenres');

      // Act
      spectator.component.ngOnInit();

      // Assert
      expect(getAllTvShows).toHaveBeenCalledTimes(1);
      expect(getGenres).toHaveBeenCalledTimes(1);
    });
  });

  describe('Method: navigateToDetails', () => {
    it('should call navigate method with correct parameters', () => {
      // Assemble
      const router = spectator.inject(Router);
      const navigate = jest.spyOn(router, 'navigate');

      // Act
      spectator.component.navigateToDetails(3);

      // Assert
      const expected = ['show-details', 3];
      expect(navigate).toHaveBeenCalledWith(expected);
    });
  });
});
