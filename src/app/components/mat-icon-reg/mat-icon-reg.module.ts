import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconRegRoutingModule } from './mat-icon-reg-routing.module';
import { MatIconRegComponent } from './mat-icon-reg.component';
import { DemoMaterialModule } from 'src/app/home/util/shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [MatIconRegComponent],
  imports: [
    CommonModule,
    MatIconRegRoutingModule,
    DemoMaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class MatIconRegModule { }
