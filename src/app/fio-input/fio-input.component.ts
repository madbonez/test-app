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
import {CyrillicInputStateMatcher} from '../validators/CyrillicInputStateMatcher';
import {minWordsLengthValidator} from '../validators/minWordsLengthValidator';

@Component({
  selector: 'app-fio-input',
  templateUrl: './fio-input.component.html',
  styleUrls: ['./fio-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: FioInputComponent,
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: FioInputComponent,
      multi: true
    }
  ]
})
export class FioInputComponent implements ControlValueAccessor, OnInit {
  onChange: any;
  fio: FormControl;

  matcher = new CyrillicInputStateMatcher();

  @Input() required = false;

  constructor() {
  }

  ngOnInit(): void {
    if (this.required) {
      this.fio = new FormControl('', [minWordsLengthValidator(2), Validators.required]);
    } else {
      this.fio = new FormControl('', [minWordsLengthValidator(2)]);
    }
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return this.fio.valid ? null : {invalid : true};
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  writeValue(obj: any): void {
    if (!obj) {
      this.fio.setValue('');
    } else {
      if (this.checkNoLatin(obj)) {
        this.fio.setValue(obj);
      }
    }
  }

  onInput(): void {
    if (this.checkNoLatin(this.fio.value)) {
      this.fio.setValue('');
      this.fio.setErrors({notCyrillic: true});
    } else {
      if (this.onChange) {
        this.onChange(this.fio.value);
      }
    }
  }

  private checkNoLatin(value: string): boolean {
    return /[a-zA-Z]/.test(value);
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }
}
