import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FioInputComponent } from './fio-input.component';

describe('FioInputComponent', () => {
  let component: FioInputComponent;
  let fixture: ComponentFixture<FioInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FioInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FioInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
