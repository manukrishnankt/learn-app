import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopperjsexampleComponent } from './popperjsexample.component';

describe('PopperjsexampleComponent', () => {
  let component: PopperjsexampleComponent;
  let fixture: ComponentFixture<PopperjsexampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopperjsexampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopperjsexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
