import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DynamicCallbackComponent } from './dynamic-callback.component';

const routes: Routes = [
  {
    path: '',
    component: DynamicCallbackComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicCallbackRoutingModule { }
