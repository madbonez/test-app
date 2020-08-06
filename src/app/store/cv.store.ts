import {Store, StoreConfig} from '@datorama/akita';
import {CvModel} from '../models/CvModel';
import {Injectable} from '@angular/core';

export interface CvState {
  docs: { [key: string]: CvModel };
  idToRead: string;
}

export function createInitialState(): CvState {
  return {
    docs: {},
    idToRead: null
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({name: 'cv'})
export class CvStore extends Store<CvState> {
  constructor() {
    super(createInitialState());
  }
}
