import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CneNavComponent } from './cne-nav.component';

describe('CneNavComponent', () => {
  let component: CneNavComponent;
  let fixture: ComponentFixture<CneNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CneNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CneNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
