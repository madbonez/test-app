import {Component} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-children-count-input',
  templateUrl: './children-count-input.component.html',
  styleUrls: ['./children-count-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: ChildrenCountInputComponent,
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: ChildrenCountInputComponent,
      multi: true
    }
  ]
})
export class ChildrenCountInputComponent implements ControlValueAccessor {
  childrenCount = new FormControl(0, Validators.required);

  touched = false;
  private onChange: any;

  constructor() {
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return this.childrenCount.valid ? null : {invalid: true};
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(obj: any): void {
    this.childrenCount.setValue(obj ? obj : 0);
  }

  changeCounter(operator: 'plus' | 'minus'): void {
    this.touched = true;
    this.childrenCount.setValue(operator === 'plus' ? this.childrenCount.value + 1 : this.childrenCount.value - 1);
    if (this.childrenCount.value < 0) {
      this.childrenCount.setValue(0);
    }
    if (this.onChange) {
      this.onChange(this.childrenCount.value);
    }
  }
}
