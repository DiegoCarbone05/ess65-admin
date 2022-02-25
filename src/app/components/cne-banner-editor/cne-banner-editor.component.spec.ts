import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CneBannerEditorComponent } from './cne-banner-editor.component';

describe('CneBannerEditorComponent', () => {
  let component: CneBannerEditorComponent;
  let fixture: ComponentFixture<CneBannerEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CneBannerEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CneBannerEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
