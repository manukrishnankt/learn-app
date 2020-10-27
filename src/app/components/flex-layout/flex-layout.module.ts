import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutRoutingModule } from './flex-layout-routing.module';
import { FlexLayoutComponent } from './flex-layout.component';
import { FlexLayoutModule as Flx }  from "@angular/flex-layout";


@NgModule({
  declarations: [FlexLayoutComponent],
  imports: [
    CommonModule,
    FlexLayoutRoutingModule,
    Flx
  ]
})
export class FlexLayoutModule { }
