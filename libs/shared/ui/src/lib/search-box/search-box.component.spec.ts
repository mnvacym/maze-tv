import { fakeAsync, flush } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatAutocomplete } from '@angular/material/autocomplete';
import { Router } from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { Observable, of } from 'rxjs';
import { SearchBoxComponent } from './search-box.component';
import { TvShow } from '@maze-tv/shared/utils';

describe('SearchBoxComponent', () => {
  let spectator: Spectator<SearchBoxComponent>;

  const createComponent = createComponentFactory({
    component: SearchBoxComponent,
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    declarations: [SearchBoxComponent, MatAutocomplete],
    mocks: [Router],
    detectChanges: false
  });

  beforeEach(() => (spectator = createComponent()));

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  describe('Method: ngOnInit', () => {
    it('should set correct value for filteredTvShows$', fakeAsync(() => {
      // Assemble
      const tvShows$ = of([
        { name: 'foo' },
        { name: 'bar' }
      ]) as unknown as Observable<TvShow[]>;
      jest.spyOn(spectator.component, 'filterShows').mockReturnValue(tvShows$);

      // Act
      spectator.component.ngOnInit();
      spectator.component.searchInput.setValue('example search input');

      // Assert
      spectator.component.filteredTvShows$?.subscribe(tvShows => {
        expect(tvShows).toEqual([{ name: 'foo' }, { name: 'bar' }]);
      });
      flush();
    }));
  });

  describe('Method: filterShows', () => {
    it('should return filtered tvShows', fakeAsync(() => {
      // Assemble
      spectator.component.tvShows$ = of([
        { name: 'foo' },
        { name: 'bar' },
        { name: 'buzz' }
      ]) as unknown as Observable<TvShow[]>;

      // Act
      const searchInput = 'fo';
      const result$ = spectator.component.filterShows(searchInput);

      // Assert
      result$.subscribe(filteredTvShows => {
        expect(filteredTvShows).toEqual([{ name: 'foo' }]);
      });
      flush();
    }));
  });

  describe('Method: onSelect', () => {
    it('should call navigateToDetails method with correct params', () => {
      // Assemble
      const navigateToDetails = jest.spyOn(
        spectator.component,
        'navigateToDetails'
      );

      // Act
      spectator.component.onSelect(11);

      // Assert
      const expected = 11;
      expect(navigateToDetails).toHaveBeenCalledWith(expected);
    });
  });

  describe('Method: navigateToDetails', () => {
    it('should call navigate method with correct params', () => {
      // Assemble
      const router = spectator.inject(Router);
      const navigate = jest.spyOn(router, 'navigate');

      // Act
      spectator.component.navigateToDetails(10);

      // Assert
      const expected = ['show-details', 10];
      expect(navigate).toHaveBeenCalledWith(expected);
    });
  });
});
