import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvancedSearchRoutingModule } from './advanced-search-routing.module';
import { AdvancedSearchComponent } from './advanced-search.component';
import { DynamicSearchComponent } from '../dynamic-search/dynamic-search.component';


@NgModule({
  declarations: [AdvancedSearchComponent, DynamicSearchComponent],
  imports: [
    CommonModule,
    AdvancedSearchRoutingModule
  ]
})
export class AdvancedSearchModule { }