import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CneInputComponent } from './cne-input.component';

describe('CneInputComponent', () => {
  let component: CneInputComponent;
  let fixture: ComponentFixture<CneInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CneInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CneInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
