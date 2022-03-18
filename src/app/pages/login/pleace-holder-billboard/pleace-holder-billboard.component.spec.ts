import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PleaceHolderBillboardComponent } from './pleace-holder-billboard.component';

describe('PleaceHolderBillboardComponent', () => {
  let component: PleaceHolderBillboardComponent;
  let fixture: ComponentFixture<PleaceHolderBillboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PleaceHolderBillboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PleaceHolderBillboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
