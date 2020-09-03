import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WijmoLearnComponent } from './wijmo-learn.component';

describe('WijmoLearnComponent', () => {
  let component: WijmoLearnComponent;
  let fixture: ComponentFixture<WijmoLearnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WijmoLearnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WijmoLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
