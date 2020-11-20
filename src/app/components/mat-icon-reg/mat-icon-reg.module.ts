import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconRegRoutingModule } from './mat-icon-reg-routing.module';
import { MatIconRegComponent } from './mat-icon-reg.component';
import { DemoMaterialModule } from 'src/app/home/util/shared/material.module';


@NgModule({
  declarations: [MatIconRegComponent],
  imports: [
    CommonModule,
    MatIconRegRoutingModule,
    DemoMaterialModule,
  ]
})
export class MatIconRegModule { }
