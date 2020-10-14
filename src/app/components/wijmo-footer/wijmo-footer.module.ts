import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WijmoFooterRoutingModule } from './wijmo-footer-routing.module';
import { WijmoFooterComponent } from './wijmo-footer.component';
import { WjGridModule } from '@grapecity/wijmo.angular2.grid';


@NgModule({
  declarations: [WijmoFooterComponent],
  imports: [
    CommonModule,
    WijmoFooterRoutingModule,
    WjGridModule, 
  ]
})
export class WijmoFooterModule { }
