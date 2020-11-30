import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvancedSearchRoutingModule } from './advanced-search-routing.module';
import { AdvancedSearchComponent } from './advanced-search.component';
import { DynamicSearchComponent } from '../dynamic-search/dynamic-search.component';
import { CommonInjectableModule } from 'src/app/shared/common-injectable/common-injectable.module';
import { DemoMaterialModule } from 'src/app/home/util/shared/material.module';


@NgModule({
  declarations: [AdvancedSearchComponent, DynamicSearchComponent],
  imports: [
    CommonModule,
    AdvancedSearchRoutingModule,
    CommonInjectableModule,
    DemoMaterialModule
  ]
})
export class AdvancedSearchModule { }
