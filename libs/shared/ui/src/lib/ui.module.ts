import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SearchBoxComponent } from './search-box/search-box.component';

@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule, ReactiveFormsModule],
  declarations: [NavBarComponent, SearchBoxComponent],
  exports: [MaterialModule, NavBarComponent, SearchBoxComponent]
})
export class UiModule {}
