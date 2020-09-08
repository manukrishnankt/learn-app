import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialExComponent } from './material-ex.component';

const routes: Routes = [
  {path:'', component: MaterialExComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialExRoutingModule { }
