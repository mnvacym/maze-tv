import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  Actor,
  Episode,
  Season,
  TvShow,
  TvShowsService
} from '@maze-tv/shared/data-access';
import { Observable } from 'rxjs';

@Component({
  selector: 'maze-tv-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShowDetailsComponent implements OnInit {
  tvShow$: Observable<TvShow> | undefined;
  cast$: Observable<Actor[]> | undefined;
  seasons$: Observable<Season[]> | undefined;
  episodes$: Observable<Episode[]> | undefined;
  id: number = this.activatedRoute.snapshot.params['id'];

  constructor(
    private activatedRoute: ActivatedRoute,
    private tvShowsService: TvShowsService
  ) {}

  ngOnInit(): void {
    this.tvShow$ = this.tvShowsService.getTvShowById(this.id);
    this.cast$ = this.tvShowsService.getCastByTvShow(this.id);
    this.seasons$ = this.tvShowsService.getSeasonsByTvShow(this.id);
    this.episodes$ = this.tvShowsService.getEpisodesByTvShow(this.id);
  }
}
