import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { TvShow } from '@maze-tv/shared/data-access';
import { Observable } from 'rxjs';
import { map, startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'maze-tv-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchBoxComponent implements OnInit {
  @Input() tvShows$!: Observable<TvShow[]>;

  searchInput = new FormControl('');
  filteredTvShows$: Observable<TvShow[]> | undefined;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.filteredTvShows$ = this.searchInput.valueChanges.pipe(
      startWith(''),
      switchMap(value => this.filterShows(value || ''))
    );
  }

  filterShows(value: string): Observable<TvShow[]> {
    const filterValue = value.toLowerCase();

    return this.tvShows$?.pipe(
      map(tvShows =>
        tvShows.filter(show => show.name.toLowerCase().includes(filterValue))
      )
    );
  }

  onSelect(showId: number): void {
    this.navigateToDetails(showId);
  }

  navigateToDetails(id: number): void {
    this.router.navigate(['show-details', id]);
  }
}
