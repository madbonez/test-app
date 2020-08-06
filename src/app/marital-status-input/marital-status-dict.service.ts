import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MaritalStatusDict {
  private statuses = {
    married1: 'женат',
    married2: 'замужем',
    divorced: 'в разводе',
    no: 'нет'
  };

  constructor() {
  }

  getViewValue(key: string): string {
    return this.statuses[key] ? this.statuses[key] : 'не задано';
  }
}
