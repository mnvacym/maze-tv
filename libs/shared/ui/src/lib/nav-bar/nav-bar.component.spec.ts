import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { NavBarComponent } from './nav-bar.component';

describe('NavBarComponent', () => {
  let spectator: Spectator<NavBarComponent>;

  const createComponent = createComponentFactory({
    component: NavBarComponent,
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    declarations: [NavBarComponent],
    detectChanges: false
  });

  beforeEach(() => (spectator = createComponent()));

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});
