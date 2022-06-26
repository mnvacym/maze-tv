import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'maze-tv-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavBarComponent {}
