import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WijmoLearnRoutingModule } from './wijmo-learn-routing.module';
import { WijmoLearnComponent } from './wijmo-learn.component';


@NgModule({
  declarations: [WijmoLearnComponent],
  imports: [
    CommonModule,
    WijmoLearnRoutingModule
  ]
})
export class WijmoLearnModule { }
