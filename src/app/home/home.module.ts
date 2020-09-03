import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaselayoutComponent } from './dashboard/layout/baselayout/baselayout.component';
import { TopNavComponent } from './dashboard/layout/top-nav/top-nav.component';
import { SideNavComponent } from './dashboard/layout/side-nav/side-nav.component';

import { HomeRoutingModule } from './home-routing.module';


@NgModule({
  declarations: [ BaselayoutComponent, TopNavComponent, SideNavComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
