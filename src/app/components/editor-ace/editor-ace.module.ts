import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorAceRoutingModule } from './editor-ace-routing.module';
import { EditorAceComponent } from './editor-ace.component';
import { AceEditorModule } from 'ng2-ace-editor';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonInjectableModule } from 'src/app/shared/common-injectable/common-injectable.module';


@NgModule({
  declarations: [EditorAceComponent],
  imports: [
    CommonModule,
    EditorAceRoutingModule,
    AceEditorModule,
    ReactiveFormsModule, CommonInjectableModule
  ]
})
export class EditorAceModule { }
