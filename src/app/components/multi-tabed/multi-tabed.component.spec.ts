import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiTabedComponent } from './multi-tabed.component';

describe('MultiTabedComponent', () => {
  let component: MultiTabedComponent;
  let fixture: ComponentFixture<MultiTabedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiTabedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiTabedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
