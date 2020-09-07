import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WijmoLearnRoutingModule } from './wijmo-learn-routing.module';
import { WijmoLearnComponent } from './wijmo-learn.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { WjGridModule } from '@grapecity/wijmo.angular2.grid';
import { WjGridGrouppanelModule } from '@grapecity/wijmo.angular2.grid.grouppanel';
import { WjGridFilterModule } from '@grapecity/wijmo.angular2.grid.filter';
import { WjGridSearchModule } from '@grapecity/wijmo.angular2.grid.search';
import { WjInputModule } from '@grapecity/wijmo.angular2.input';
import { ExportService } from '../../service/export.service';
import { DataService } from '../../service/data.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [WijmoLearnComponent],
  imports: [
    CommonModule,
    WijmoLearnRoutingModule,
    FlexLayoutModule,
    WjInputModule,
    WjGridModule,
    WjGridGrouppanelModule,
    WjGridFilterModule,
    WjGridSearchModule,
    FormsModule
  ],
  providers:[ExportService, DataService]
})
export class WijmoLearnModule { }
