import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonInjectableRoutingModule } from './common-injectable-routing.module';
import { CustPercentagenPipe } from '../../pipes/cust-percentagen.pipe';


@NgModule({
  declarations: [CustPercentagenPipe],
  imports: [
    CommonModule,
    CommonInjectableRoutingModule
  ],
  exports:[
    CustPercentagenPipe
  ]
})
export class CommonInjectableModule { }
