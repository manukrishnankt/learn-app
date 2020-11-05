import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WijmoFooterRoutingModule } from './wijmo-footer-routing.module';
import { WijmoFooterComponent } from './wijmo-footer.component';
import { WjGridModule } from '@grapecity/wijmo.angular2.grid';
import { WjChartModule } from '@grapecity/wijmo.angular2.chart';
import { DemoMaterialModule } from 'src/app/home/util/shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [WijmoFooterComponent],
  imports: [
    CommonModule,
    WijmoFooterRoutingModule,
    WjGridModule, WjChartModule,
    DemoMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class WijmoFooterModule { }
