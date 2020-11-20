import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatIconRegComponent } from './mat-icon-reg.component';

const routes: Routes = [
  {
    path: '',
    component: MatIconRegComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatIconRegRoutingModule { }
