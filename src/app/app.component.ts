import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Template } from '@angular/compiler/src/render3/r3_ast';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = environment.production;
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer) {
      const svgList = ['a', 'b', 'c'];
      svgList.forEach(lis => {
        this.matIconRegistry.addSvgIcon(
          lis,
          this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/img/' + lis + '.svg')
        );
      });
    }
}
