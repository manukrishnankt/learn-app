import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopperjsexampleComponent} from './popperjsexample.component';
import { PopperJsRoutingModule } from './popperjsexample-routing.module'


 
@NgModule({
  declarations: [
    PopperjsexampleComponent
  ],
  imports: [
    CommonModule,
    PopperJsRoutingModule
  ]
})
export class PopperjsexampleModule { }
