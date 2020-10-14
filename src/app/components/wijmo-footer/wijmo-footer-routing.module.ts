import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WijmoFooterComponent } from './wijmo-footer.component';

const routes: Routes = [
  {
    path: '',
    component: WijmoFooterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WijmoFooterRoutingModule { }
