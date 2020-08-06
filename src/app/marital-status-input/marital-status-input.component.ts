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
  selector: 'app-marital-status-input',
  templateUrl: './marital-status-input.component.html',
  styleUrls: ['./marital-status-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: MaritalStatusInputComponent,
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: MaritalStatusInputComponent,
      multi: true
    }
  ]
})
export class MaritalStatusInputComponent implements ControlValueAccessor, OnInit {
  statusesInit = [
    {value: 'divorced', viewValue: 'в разводе'},
    {value: 'no', viewValue: 'нет'}
  ];

  statuses = [...this.statusesInit];

  @Input() required = false;

  @Input() set gender(val: 'male' | 'female') {
    if (val) {
      this.statuses = [
        val === 'male' ? {value: 'married1', viewValue: 'женат'} : {value: 'married2', viewValue: 'замужем'},
        ...this.statusesInit
      ];
      if (this.status) {
        this.status.setValue(null);
      }
    }
  }

  status: FormControl;

  private onChange: any;

  constructor() {
  }

  ngOnInit(): void {
    this.status = new FormControl(null, this.required ? Validators.required : []);
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return this.status.valid ? null : {invalid: true};
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(obj: any): void {
    this.status.setValue(obj ? obj : '');
  }

  onStatusChange(): void {
    if (this.onChange) {
      this.onChange(this.status.value);
    }
  }
}
