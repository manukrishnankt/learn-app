import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WijmoFooterComponent } from './wijmo-footer.component';

describe('WijmoFooterComponent', () => {
  let component: WijmoFooterComponent;
  let fixture: ComponentFixture<WijmoFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WijmoFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WijmoFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
