import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialExRoutingModule } from './material-ex-routing.module';
import { MaterialExComponent } from './material-ex.component';
import { DemoMaterialModule } from 'src/app/home/util/shared/material.module';


@NgModule({
  declarations: [MaterialExComponent],
  imports: [
    CommonModule,
    MaterialExRoutingModule,
    DemoMaterialModule,
  ]
})
export class MaterialExModule { }
