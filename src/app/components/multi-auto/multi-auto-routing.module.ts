import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MultiAutoComponent } from './multi-auto.component';

const routes: Routes = [
  { path : '', component : MultiAutoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MultiAutoRoutingModule { }
