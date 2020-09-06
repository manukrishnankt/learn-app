import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WijmoLearnRoutingModule } from './wijmo-learn-routing.module';
import { WijmoLearnComponent } from './wijmo-learn.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { WjGridModule } from '@grapecity/wijmo.angular2.grid';
import { WjGridFilterModule } from '@grapecity/wijmo.angular2.grid.filter';

@NgModule({
  declarations: [WijmoLearnComponent],
  imports: [
    CommonModule,
    WijmoLearnRoutingModule,
    FlexLayoutModule,
    WjGridModule, 
    WjGridFilterModule
  ]
})
export class WijmoLearnModule { }
