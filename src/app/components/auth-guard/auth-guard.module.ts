import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthGuardRoutingModule } from './auth-guard-routing.module';
import { AuthGuardComponent } from './auth-guard.component';
import { RouteResolver } from './route-resolver';


@NgModule({
  declarations: [AuthGuardComponent],
  imports: [
    CommonModule,
    AuthGuardRoutingModule
  ],
  providers:[RouteResolver]
})
export class AuthGuardModule { }
