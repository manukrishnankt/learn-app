import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonInjectableRoutingModule } from './common-injectable-routing.module';
import { CustPercentagenPipe } from '../../pipes/cust-percentagen.pipe';
import { XmlPipe } from '../../components/dynamic-search/XmlPipe';
import { JSONPipe } from '../../components/dynamic-search/JSONPipe';



@NgModule({
  declarations: [CustPercentagenPipe, XmlPipe, JSONPipe],
  imports: [
    CommonModule,
    CommonInjectableRoutingModule
  ],
  exports: [
    CustPercentagenPipe,
    XmlPipe,
    JSONPipe
  ]
})
export class CommonInjectableModule { }
