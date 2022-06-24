import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterByGenrePipe } from './pipes/genre.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [FilterByGenrePipe],
  exports: [FilterByGenrePipe]
})
export class UtilsModule {}
