import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CneAlertEditorComponent } from './cne-alert-editor.component';

describe('CneAlertEditorComponent', () => {
  let component: CneAlertEditorComponent;
  let fixture: ComponentFixture<CneAlertEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CneAlertEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CneAlertEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
