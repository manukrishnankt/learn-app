import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsExRoutingModule } from './forms-ex-routing.module';
import { FormsExComponent } from './forms-ex.component';


@NgModule({
  declarations: [FormsExComponent],
  imports: [
    CommonModule,
    FormsExRoutingModule
  ]
})
export class FormsExModule { }
