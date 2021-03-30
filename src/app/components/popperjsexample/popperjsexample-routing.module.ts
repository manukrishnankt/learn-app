import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopperjsexampleComponent } from './popperjsexample.component';

const routes: Routes = [
  {
    path: '',
    component: PopperjsexampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PopperJsRoutingModule { }
