import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WijmoComponent } from './wijmo.component';

const routes: Routes = [
  { path: '',
    component: WijmoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WijmoRoutingModule { }
