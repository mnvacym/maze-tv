import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

import { TvShowsService } from '@maze-tv/shared/data-access';
import { TvShow } from '@maze-tv/shared/utils';

@Component({
  selector: 'maze-tv-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingComponent implements OnInit {
  tvShows$!: Observable<TvShow[]>;
  genres$!: Observable<string[]>;

  constructor(private router: Router, private tvShowsService: TvShowsService) {}

  ngOnInit(): void {
    this.tvShows$ = this.tvShowsService
      .getAllTvShows()
      .pipe(
        map(tvShows =>
          tvShows.sort((a, b) => b.rating.average - a.rating.average)
        )
      );
    this.genres$ = this.tvShowsService.getGenres();
  }

  navigateToDetails(id: number): void {
    this.router.navigate(['show-details', id]);
  }
}
