import { NgModule } from '@angular/core';
import {
  type ExtraOptions,
  RouterModule,
  type Routes,
} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'search',
    loadChildren: () =>
      import('./search/search.module').then((m) => m.SearchModule),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./error/error.module').then((m) => m.ErrorModule),
  },
];

const extraOptions: ExtraOptions = {
  enableTracing: false,
  onSameUrlNavigation: 'ignore',
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'disabled',
  // TODO: ...
};

@NgModule({
  imports: [RouterModule.forRoot(routes, extraOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
