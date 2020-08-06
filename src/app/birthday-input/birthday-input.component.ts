import {Component, Input, OnInit} from '@angular/core';
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
  selector: 'app-birthday-input',
  templateUrl: './birthday-input.component.html',
  styleUrls: ['./birthday-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: BirthdayInputComponent,
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: BirthdayInputComponent,
      multi: true
    }
  ]
})
export class BirthdayInputComponent implements ControlValueAccessor, OnInit {
  birthday: FormControl;
  private onChange: any;

  @Input() required = false;

  constructor() { }

  ngOnInit(): void {
    this.birthday = new FormControl(null, this.required ? Validators.required : []);
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return this.birthday.valid ? null : {invalid : true};
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(obj: any): void {
    this.birthday.setValue(obj);
  }

  onSelect(): void {
    if (this.onChange) {
      this.onChange(this.birthday.value);
    }
  }
}
