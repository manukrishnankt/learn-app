import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsExRoutingModule } from './forms-ex-routing.module';
import { FormsExComponent } from './forms-ex.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoMaterialModule } from 'src/app/home/util/shared/material.module';


@NgModule({
  declarations: [FormsExComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsExRoutingModule,
    DemoMaterialModule
  ]
})
export class FormsExModule { }
