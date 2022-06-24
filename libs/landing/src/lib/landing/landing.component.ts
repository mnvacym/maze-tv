import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { TvShow, TvShowsService } from '@maze-tv/shared/data-access';
import { Observable } from 'rxjs';

@Component({
  selector: 'maze-tv-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingComponent implements OnInit {
  tvShows$: Observable<TvShow[]> | undefined;
  genres$: Observable<string[]> | undefined;

  constructor(private tvShowsService: TvShowsService) {}

  ngOnInit(): void {
    this.tvShows$ = this.tvShowsService.getAllTvShows();
    this.genres$ = this.tvShowsService.getGenres();
  }
}
