import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicComponentRoutingModule } from './dynamic-component-routing.module';
import { DynamicComponentComponent } from './dynamic-component.component';
import { Child1Component } from './child1/child1.component';


@NgModule({
  declarations: [DynamicComponentComponent, Child1Component],
  imports: [
    CommonModule,
    DynamicComponentRoutingModule
  ],
  providers:[Child1Component]
})
export class DynamicComponentModule { }
