import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import * as moment from 'moment';
import {BehaviorSubject, of} from 'rxjs';
import {delay, switchMap, timeout} from 'rxjs/operators';
import {CvService} from '../services/cv.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-cv-form',
  templateUrl: './cv-form.component.html',
  styleUrls: ['./cv-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CvFormComponent implements OnInit {
  cvForm = this.fb.group({
    fio: [''],
    gender: [''],
    comments: [''],
    email: [''],
    childrenCount: [''],
    maritalStatus: [''],
    birthday: ['']
  });

  isAdult = false;
  private attemptsCount = 0;

  submitButtonDisabledSubject =  new BehaviorSubject(false);
  submitButtonDisabled$ =  this.submitButtonDisabledSubject.asObservable();

  constructor(private fb: FormBuilder, private cvService: CvService, private router: Router) { }

  ngOnInit(): void {
    this.cvForm.valueChanges.subscribe(() => {
      if (this.cvForm.get('birthday')) {
        const userBirthday = (this.cvForm.get('birthday').value as Date);
        this.isAdult = moment().diff(userBirthday, 'years') >= 18;
      }
    });
  }

  onSubmit(): void {
    this.attemptsCount++;
    if (this.cvForm.invalid && this.attemptsCount > 2) {
      // tslint:disable-next-line:forin
      for (const controlsKey in this.cvForm.controls) {
        this.cvForm.controls[controlsKey].setValue('');
      }
      this.attemptsCount = 0;
    }

    if (this.cvForm.valid) {
      this.saveCv();
    } else {
      this.submitButtonDisabledSubject.next(true);
      setTimeout(() => {
        this.submitButtonDisabledSubject.next(false);
      }, 10000);
    }
  }

  saveCv(): void {
    this.cvService.saveCv(this.cvForm.value);
    this.router.navigate(['/', 'result']);
  }
}
