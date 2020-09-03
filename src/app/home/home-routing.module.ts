import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaselayoutComponent } from './dashboard/layout/baselayout/baselayout.component';
import { childRoutes } from './util/shared/child-routes'

const routes: Routes = [
  {
    path: '',
    component: BaselayoutComponent,
    children: [
      ...childRoutes,
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
