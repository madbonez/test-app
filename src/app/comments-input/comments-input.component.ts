import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
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

@Component({
  selector: 'app-comments-input',
  templateUrl: './comments-input.component.html',
  styleUrls: ['./comments-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CommentsInputComponent,
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: CommentsInputComponent,
      multi: true
    }
  ]
})
export class CommentsInputComponent implements ControlValueAccessor, OnInit {
  comments: FormControl;
  private onChange: any;

  matcher = new CyrillicInputStateMatcher();

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.comments = new FormControl('');
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return this.comments.valid ? null : {invalid : true};
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(obj: any): void {
    this.comments.setValue(obj ? obj : null);
  }


  private checkNoLatin(value: string): boolean {
    return /[a-zA-Z]/.test(value);
  }

  onCommentsChange(): void {
    if (this.checkNoLatin(this.comments.value)) {
      this.comments.setValue('');
      this.comments.setErrors({notCyrillic: true});
    } else {
      if (this.onChange) {
        this.onChange(this.comments.value);
      }
    }
  }

  focusOut(): void {
    this.comments.setErrors(null);
  }
}
