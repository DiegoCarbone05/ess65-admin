import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CneTitleBarComponent } from './cne-title-bar.component';

describe('CneTitleBarComponent', () => {
  let component: CneTitleBarComponent;
  let fixture: ComponentFixture<CneTitleBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CneTitleBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CneTitleBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
