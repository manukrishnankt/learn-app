import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WijmoRoutingModule } from './wijmo-routing.module';
import { WijmoComponent } from './wijmo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoMaterialModule } from 'src/app/home/util/shared/material.module';
import { WjGridModule } from '@grapecity/wijmo.angular2.grid';


@NgModule({
  declarations: [WijmoComponent],
  imports: [
    CommonModule,
    WijmoRoutingModule,
    WjGridModule,
    DemoMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class WijmoModule { }
