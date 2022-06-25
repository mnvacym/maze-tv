import { Pipe, PipeTransform } from '@angular/core';
import { TvShow } from '@maze-tv/shared/data-access';

@Pipe({
  name: 'filterByGenre',
  pure: false
})
export class FilterByGenrePipe implements PipeTransform {
  /**
   * @description Filters tv shows by genre
   * @param tvShows tv shows
   * @param genre genre as string
   */
  transform(tvShows: TvShow[] | null, genre: string): TvShow[] | null {
    if (!tvShows || !genre) {
      return tvShows;
    }

    return tvShows.filter(show => show.genres.includes(genre));
  }
}
