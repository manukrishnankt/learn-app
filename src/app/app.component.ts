import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Template } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = environment.production;
}
