import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UiModule } from '@maze-tv/shared/ui';
import { UtilsModule } from '@maze-tv/shared/utils';

import { LandingComponent } from './landing/landing.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: LandingComponent }
    ]),
    UiModule,
    UtilsModule
  ],
  declarations: [LandingComponent]
})
export class LandingModule {}
