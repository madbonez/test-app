import {FormControl, FormGroupDirective, NgForm} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

export class CyrillicInputStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;

    if (control.hasError('notCyrillic')){
      return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    } else {
      return !!(control && control.invalid && (control.touched || isSubmitted));
    }
  }
}
