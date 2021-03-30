import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatmenuCustComponent } from './matmenu-cust.component';

const routes: Routes = [
  {
    path:'',
    component: MatmenuCustComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatmenuCustRoutingModule { }
