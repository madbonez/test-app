import {Injectable} from '@angular/core';
import {CvStore} from '../store/cv.store';
import {CvModel} from '../models/CvModel';
import {generateGuid} from '../utils/generateGuid';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  constructor(private cvStore: CvStore) {

  }

  saveCv(cvData: CvModel): void {
    if (!cvData.maritalStatus) {
      cvData.maritalStatus = 'no';
    }
    const guid = generateGuid();
    this.cvStore.update(state => {
      return {
        ...state,
        docs: {
          ...state.docs,
          [guid]: cvData
        },
        idToRead: guid
      };
    });
  }

  cleanIdToRead(): void {
    this.cvStore.update({ idToRead: null });
  }
}
