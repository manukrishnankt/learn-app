import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DemoMaterialModule } from '../../home/util/shared/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FlexLayoutModule,
    DemoMaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class LoginModule { }
