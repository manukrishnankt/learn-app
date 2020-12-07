import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditorAceComponent } from './editor-ace.component';

const routes: Routes = [
  { path: '', component: EditorAceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditorAceRoutingModule { }
