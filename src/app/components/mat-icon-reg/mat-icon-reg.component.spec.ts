import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatIconRegComponent } from './mat-icon-reg.component';

describe('MatIconRegComponent', () => {
  let component: MatIconRegComponent;
  let fixture: ComponentFixture<MatIconRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatIconRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatIconRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
