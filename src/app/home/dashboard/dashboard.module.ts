import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DemoMaterialModule } from '../util/shared/material.module';
import { DashboardComponent } from './dashboard.component';
import { CommonInjectableModule } from 'src/app/shared/common-injectable/common-injectable.module';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    DemoMaterialModule,
    CommonInjectableModule
  ]
})
export class DashboardModule { }
