import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CneWinSlideComponent } from './cne-win-slide.component';

describe('CneWinSlideComponent', () => {
  let component: CneWinSlideComponent;
  let fixture: ComponentFixture<CneWinSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CneWinSlideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CneWinSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
