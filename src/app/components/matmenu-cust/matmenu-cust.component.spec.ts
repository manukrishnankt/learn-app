import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatmenuCustComponent } from './matmenu-cust.component';

describe('MatmenuCustComponent', () => {
  let component: MatmenuCustComponent;
  let fixture: ComponentFixture<MatmenuCustComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatmenuCustComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatmenuCustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
