import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsExComponent } from './forms-ex.component';

const routes: Routes = [
  { path : '', component : FormsExComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsExRoutingModule { }
