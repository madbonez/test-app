/** A hero's name can't match the given regular expression */
import {AbstractControl, ValidatorFn} from '@angular/forms';

export function minWordsLengthValidator(min: number): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    if (control.value.trim().length === 0) {
      return null;
    }
    const words = control.value.trim().split(' ');
    return words.length < min ? {wordsCountError: true} : null;
  };
}
