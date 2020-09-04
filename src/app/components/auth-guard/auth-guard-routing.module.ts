import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardComponent } from './auth-guard.component';
import { RouteResolver } from './route-resolver';

const routes: Routes = [
  {
    path : '',
    component : AuthGuardComponent,
    resolve : {message : RouteResolver}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthGuardRoutingModule { }
