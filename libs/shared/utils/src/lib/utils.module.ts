import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterByGenrePipe } from './pipes/genre/genre.pipe';
import { FilterBySeasonPipe } from './pipes/season/season.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [FilterByGenrePipe, FilterBySeasonPipe],
  exports: [FilterByGenrePipe, FilterBySeasonPipe]
})
export class UtilsModule {}
