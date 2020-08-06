import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenderInputComponent } from './gender-input.component';

describe('GenderInputComponent', () => {
  let component: GenderInputComponent;
  let fixture: ComponentFixture<GenderInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenderInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenderInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
