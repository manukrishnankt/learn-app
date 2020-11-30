import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MultiTabedComponent } from './multi-tabed.component';

const routes: Routes = [
  {
    path: '',
    component: MultiTabedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MultiTabedRoutingModule { }
