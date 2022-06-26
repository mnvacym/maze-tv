import { Component } from '@angular/core';
import { SpectatorPipe, createPipeFactory } from '@ngneat/spectator/jest';
import { TvShow } from '../../../types';
import { FilterByGenrePipe } from './genre.pipe';

@Component({
  template: `<div *ngFor="let show of tvShows | filterByGenre: genre">
    {{ show.title }}
  </div>`
})
class CustomHostComponent {
  genre = 'comedy';
  tvShows = [
    {
      title: 'foo',
      genres: ['drama', 'action']
    },
    {
      title: 'bar',
      genres: ['horror', 'action']
    },
    {
      title: 'buzz',
      genres: ['comedy', 'action']
    }
  ] as unknown as TvShow[];
}

describe('FilterByGenrePipe', () => {
  let spectator: SpectatorPipe<FilterByGenrePipe>;
  const createPipe = createPipeFactory({
    pipe: FilterByGenrePipe,
    host: CustomHostComponent
  });

  it('should not contain text foo, if genre is comedy', () => {
    spectator = createPipe();
    expect(spectator.element).not.toContainText('foo');
  });

  it('should not contain text bar, if genre is comedy', () => {
    spectator = createPipe();
    expect(spectator.element).not.toContainText('bar');
  });

  it('should contain text buzz, if genre is comedy', () => {
    spectator = createPipe();
    expect(spectator.element).toContainText('buzz');
  });
});
