import {Component, HostListener, Input, OnInit} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validators
} from '@angular/forms';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'app-gender-input',
  templateUrl: './gender-input.component.html',
  styleUrls: ['./gender-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: GenderInputComponent,
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: GenderInputComponent,
      multi: true
    }
  ],
  animations: [
    trigger('slideUpDown', [
      state('*', style({ transform: 'translateY(0)', opacity: 1 })),
      state('void', style({ transform: 'translateY(-20%)', opacity: 0 })),
      transition('void <=> *', animate('300ms 200ms ease')),
    ])
  ]
})
export class GenderInputComponent implements ControlValueAccessor, OnInit {
  @Input() required = false;

  genderValue: FormControl;

  private onChange: any;
  private parentFormSubmitted = false;

  constructor() { }

  ngOnInit(): void {
    this.genderValue = new FormControl(null, this.required ? Validators.required : []);
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return this.genderValue.valid ? null : {invalid : true};
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(obj: any): void {
    this.genderValue.setValue(obj);
  }

  onSelect(): void {
    if (this.onChange) {
      this.onChange(this.genderValue.value);
    }
  }

  isValid(): boolean {
    return this.genderValue.invalid && (!this.genderValue.pristine || this.parentFormSubmitted);
  }

  @HostListener('document:submit', ['$event'])
  listenSubmit(e): void {
    this.parentFormSubmitted = true;
  }
}
