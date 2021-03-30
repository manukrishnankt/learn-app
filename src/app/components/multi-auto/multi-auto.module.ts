import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MultiAutoRoutingModule } from './multi-auto-routing.module';
import { MultiAutoComponent } from './multi-auto.component';
import { AutoCompleteDirectiveComponent } from './auto-complete-directive/auto-complete-directive.component';
import { DemoMaterialModule } from 'src/app/home/util/shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [MultiAutoComponent, AutoCompleteDirectiveComponent],
  imports: [
    CommonModule,
    MultiAutoRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    DemoMaterialModule, 
  ]
})
export class MultiAutoModule { }
