import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaselayoutComponent } from './dashboard/layout/baselayout/baselayout.component';
import { TopNavComponent } from './dashboard/layout/top-nav/top-nav.component';
import { SideNavComponent } from './dashboard/layout/side-nav/side-nav.component';
import { FlexLayoutModule } from "@angular/flex-layout";

import { HomeRoutingModule } from './home-routing.module';
import { DemoMaterialModule } from './util/shared/material.module';


@NgModule({
  declarations: [ BaselayoutComponent, TopNavComponent, SideNavComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FlexLayoutModule,
    DemoMaterialModule
  ]
})
export class HomeModule { }
