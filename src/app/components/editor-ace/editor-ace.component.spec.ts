import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorAceComponent } from './editor-ace.component';

describe('EditorAceComponent', () => {
  let component: EditorAceComponent;
  let fixture: ComponentFixture<EditorAceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorAceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorAceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
