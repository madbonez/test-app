import {Component, OnInit} from '@angular/core';
import {CvQuery} from '../store/cv.query';
import {first, map, shareReplay, switchMap} from 'rxjs/operators';
import {Observable, of, throwError} from 'rxjs';
import {CvService} from '../services/cv.service';
import {CvModel} from '../models/CvModel';
import {Router} from '@angular/router';
import {MaritalStatusDict} from '../marital-status-input/marital-status-dict.service';

@Component({
  selector: 'app-result-view',
  templateUrl: './result-view.component.html',
  styleUrls: ['./result-view.component.scss']
})
export class ResultViewComponent implements OnInit {
  cvData$: Observable<CvModel>;

  constructor(private cvQuery: CvQuery, private cvService: CvService, private router: Router,
              public maritalDict: MaritalStatusDict) {
  }

  ngOnInit(): void {
    this.cvData$ = this.cvQuery.selectCvToRead$.pipe(
      first(),
      switchMap(data => {
        if (!data) {
          this.router.navigate(['']);
          return of(null);
        } else {
          this.cvService.cleanIdToRead();
          return of(data);
        }
      }),
      shareReplay()
    );
  }

}
