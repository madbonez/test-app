import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaritalStatusInputComponent } from './marital-status-input.component';

describe('MaritalStatusInputComponent', () => {
  let component: MaritalStatusInputComponent;
  let fixture: ComponentFixture<MaritalStatusInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaritalStatusInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaritalStatusInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
