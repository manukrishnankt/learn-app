import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WijmoLearnComponent } from './wijmo-learn.component';

const routes: Routes = [
  {
    path: '',
    component : WijmoLearnComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WijmoLearnRoutingModule { }
