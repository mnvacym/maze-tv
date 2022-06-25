import { NgModule } from '@angular/core';
import {
  ExtraOptions,
  PreloadAllModules,
  RouterModule,
  Routes
} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('@maze-tv/landing').then(module => module.LandingModule)
  },
  {
    path: 'show-details',
    loadChildren: () =>
      import('@maze-tv/show-details').then(module => module.ShowDetailsModule)
  },
  {
    path: '**',
    loadChildren: () =>
      import('@maze-tv/landing').then(module => module.LandingModule)
  }
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
  preloadingStrategy: PreloadAllModules
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
