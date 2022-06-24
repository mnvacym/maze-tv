import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { TvShowsService } from '@maze-tv/data-access';

@Component({
  selector: 'maze-tv-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingComponent implements OnInit {
  constructor(private tvShowsService: TvShowsService) {}

  ngOnInit(): void {
    this.tvShowsService.getAllTvShows().subscribe(data => console.log(data));
  }
}
