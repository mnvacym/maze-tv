import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [MaterialModule, NavBarComponent],
  declarations: [NavBarComponent]
})
export class UiModule {}
