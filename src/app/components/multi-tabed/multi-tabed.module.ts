import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MultiTabedRoutingModule } from './multi-tabed-routing.module';
import { MultiTabedComponent } from './multi-tabed.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DemoMaterialModule } from '../../home/util/shared/material.module';
import { Template1Component } from './template/template1/template1.component';
import { Template2Component } from './template/template2/template2.component';
import { Template3Component } from './template/template3/template3.component';


@NgModule({
  declarations: [MultiTabedComponent, Template1Component, Template2Component, Template3Component],
  imports: [
    CommonModule,
    MultiTabedRoutingModule,
    DemoMaterialModule,
    ReactiveFormsModule
  ]
})
export class MultiTabedModule { }
