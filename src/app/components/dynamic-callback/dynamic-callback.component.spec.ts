import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicCallbackComponent } from './dynamic-callback.component';

describe('DynamicCallbackComponent', () => {
  let component: DynamicCallbackComponent;
  let fixture: ComponentFixture<DynamicCallbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicCallbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicCallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
