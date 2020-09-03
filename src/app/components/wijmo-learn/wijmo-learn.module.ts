import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WijmoLearnRoutingModule } from './wijmo-learn-routing.module';
import { WijmoLearnComponent } from './wijmo-learn.component';
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  declarations: [WijmoLearnComponent],
  imports: [
    CommonModule,
    WijmoLearnRoutingModule,
    FlexLayoutModule
  ]
})
export class WijmoLearnModule { }
