import { CdkOverlayOrigin, Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { TemplatePortalDirective, Portal } from '@angular/cdk/portal';
import { AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
declare let ace;
@Component({
  selector: 'app-dynamic-search',
  templateUrl: './dynamic-search.component.html',
  styleUrls: ['./dynamic-search.component.scss']
})
export class DynamicSearchComponent implements OnInit, AfterViewInit {
  overlayRef: any;
  constructor(public overlay: Overlay) { }
  @ViewChild('me') tortelliniOrigin: CdkOverlayOrigin;
  // tslint:disable-next-line: deprecation
  @ViewChild('tortelliniTemplate') tortelliniTemplate: TemplatePortalDirective;
  tortelliniFillings = ["cheese and spinach", "mushroom and broccoli"];
  isMenuOpen = true;
  xmlString = '<note><to>Tove</to><from>Jani</from><heading>Reminder</heading><body>Don' + 't forget me this weekend!</body></note>';
  jsonString = '{"employees":[{"firstName":"John", "lastName":"Doe"},{"firstName":"Anna", "lastName":"Smith"},{"firstName":"Peter", "lastName":"Jones"}]}';
  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
  }
  openTortelliniPanel() {
    if (this.isMenuOpen) {
      const strategy = this.overlay
        .position()
        .connectedTo(
          this.tortelliniOrigin.elementRef,
          { originX: 'start', originY: 'bottom' },
          { overlayX: 'center', overlayY: 'top' }
        );
      const config = new OverlayConfig(
        { positionStrategy: strategy, hasBackdrop: true, backdropClass: 'cdk-overlay-transparent-backdrop', },
        );
      const overlayRef = this.overlay.create(config);
      overlayRef.backdropClick().subscribe(() => {
        overlayRef.dispose();
        this.isMenuOpen = !this.isMenuOpen;
      });
      overlayRef.attach(this.tortelliniTemplate);
      this.overlayRef = overlayRef;
    }
    if (!this.isMenuOpen) {
      this.overlayRef.dispose();
    }
    this.isMenuOpen = !this.isMenuOpen;
  }
}
