import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiAutoComponent } from './multi-auto.component';

describe('MultiAutoComponent', () => {
  let component: MultiAutoComponent;
  let fixture: ComponentFixture<MultiAutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiAutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
