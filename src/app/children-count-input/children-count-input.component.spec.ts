import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenCountInputComponent } from './children-count-input.component';

describe('ChildrenCountInputComponent', () => {
  let component: ChildrenCountInputComponent;
  let fixture: ComponentFixture<ChildrenCountInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildrenCountInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildrenCountInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
