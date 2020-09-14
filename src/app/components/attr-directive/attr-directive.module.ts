import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttrDirectiveRoutingModule } from './attr-directive-routing.module';
import { AttrDirectiveComponent } from './attr-directive.component';
import { HighlightDirective } from '../../directives/highlight.directive';


@NgModule({
  declarations: [AttrDirectiveComponent, HighlightDirective],
  imports: [
    CommonModule,
    AttrDirectiveRoutingModule
  ]
})
export class AttrDirectiveModule { }
