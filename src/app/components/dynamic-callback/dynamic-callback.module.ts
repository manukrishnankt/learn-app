import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicCallbackRoutingModule } from './dynamic-callback-routing.module';
import { DynamicCallbackComponent } from './dynamic-callback.component';


@NgModule({
  declarations: [DynamicCallbackComponent],
  imports: [
    CommonModule,
    DynamicCallbackRoutingModule
  ]
})
export class DynamicCallbackModule { }
