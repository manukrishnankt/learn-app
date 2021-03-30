import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatmenuCustRoutingModule } from './matmenu-cust-routing.module';
import { MatmenuCustComponent } from './matmenu-cust.component';
import { DemoMaterialModule } from 'src/app/home/util/shared/material.module';


@NgModule({
  declarations: [
    MatmenuCustComponent
  ],
  imports: [
    CommonModule,
    MatmenuCustRoutingModule,
    DemoMaterialModule
  ]
})
export class MatmenuCustModule { }
