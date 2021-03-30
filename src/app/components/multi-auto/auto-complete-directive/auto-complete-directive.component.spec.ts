import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoCompleteDirectiveComponent } from './auto-complete-directive.component';

describe('AutoCompleteDirectiveComponent', () => {
  let component: AutoCompleteDirectiveComponent;
  let fixture: ComponentFixture<AutoCompleteDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoCompleteDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoCompleteDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
