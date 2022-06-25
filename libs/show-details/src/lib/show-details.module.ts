import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { UiModule } from '@maze-tv/shared/ui';
import { UtilsModule } from '@maze-tv/shared/utils';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: ':id', pathMatch: 'full', component: ShowDetailsComponent }
    ]),
    UiModule,
    UtilsModule
  ],
  declarations: [ShowDetailsComponent]
})
export class ShowDetailsModule {}
