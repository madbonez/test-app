import {Query} from '@datorama/akita';
import {CvState, CvStore} from './cv.store';

import {map} from 'rxjs/operators';
import {combineLatest} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CvQuery extends Query<CvState> {

  selectIdToRead$ = this.select('idToRead');
  selectAllCv$ = this.select('docs');

  selectCvToRead$ = combineLatest([this.selectAllCv$, this.selectIdToRead$]).pipe(
    map(([all, id]) => all[id])
  );

  constructor(protected store: CvStore) {
    super(store);
  }

}
