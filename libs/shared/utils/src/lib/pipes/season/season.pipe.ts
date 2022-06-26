import { Pipe, PipeTransform } from '@angular/core';
import { Episode } from '../../../types';

@Pipe({
  name: 'filterBySeason',
  pure: false
})
export class FilterBySeasonPipe implements PipeTransform {
  /**
   * @description Filters episodes by season
   * @param episodes episodes
   * @param season season as number
   */
  transform(episodes: Episode[] | null, season: number): Episode[] | null {
    if (!episodes || !season) {
      return episodes;
    }

    return episodes.filter(episode => episode.season === season);
  }
}
