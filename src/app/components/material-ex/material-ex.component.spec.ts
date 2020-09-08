import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialExComponent } from './material-ex.component';

describe('MaterialExComponent', () => {
  let component: MaterialExComponent;
  let fixture: ComponentFixture<MaterialExComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialExComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
