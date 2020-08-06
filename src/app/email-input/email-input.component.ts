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
  selector: 'app-email-input',
  templateUrl: './email-input.component.html',
  styleUrls: ['./email-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: EmailInputComponent,
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: EmailInputComponent,
      multi: true
    }
  ]
})
export class EmailInputComponent implements ControlValueAccessor, OnInit {
  email: FormControl;
  private onChange: any;

  @Input() required = false;

  constructor() {
  }

  ngOnInit(): void {
    if (this.required) {
      this.email = new FormControl('', [Validators.required, Validators.email]);
    } else {
      this.email = new FormControl('', [Validators.email]);
    }
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return this.email.valid ? null : {invalid: true};
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(obj: any): void {
    this.email.setValue(obj ? obj : '');
  }


  emailChange(): void {
    if (this.onChange) {
      this.onChange(this.email.value);
    }
  }
}
