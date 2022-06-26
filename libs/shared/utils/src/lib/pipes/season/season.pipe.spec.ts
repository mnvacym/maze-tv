import { Component } from '@angular/core';
import { SpectatorPipe, createPipeFactory } from '@ngneat/spectator/jest';
import { Episode } from '../../../types';
import { FilterBySeasonPipe } from './season.pipe';

@Component({
  template: `<div *ngFor="let episode of episodes | filterBySeason: season">
    {{ episode.title }}
  </div>`
})
class CustomHostComponent {
  season = 2;
  episodes = [
    {
      title: 'foo',
      season: 2
    },
    {
      title: 'bar',
      season: 3
    },
    {
      title: 'buzz',
      season: 4
    }
  ] as unknown as Episode[];
}

describe('FilterBySeasonPipe', () => {
  let spectator: SpectatorPipe<FilterBySeasonPipe>;
  const createPipe = createPipeFactory({
    pipe: FilterBySeasonPipe,
    host: CustomHostComponent
  });

  it('should contain text foo, if season is 2', () => {
    spectator = createPipe();
    expect(spectator.element).toContainText('foo');
  });

  it('should not contain text bar, if season is 2', () => {
    spectator = createPipe();
    expect(spectator.element).not.toContainText('bar');
  });

  it('should not contain text buzz, if season is 2', () => {
    spectator = createPipe();
    expect(spectator.element).not.toContainText('buzz');
  });
});
