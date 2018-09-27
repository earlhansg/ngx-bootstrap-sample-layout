import { Injectable } from '@angular/core';

import { Observable, forkJoin } from 'rxjs';

import { users, average, males, females, collection } from '../data/sub-header-item-list';

@Injectable()
export class SubHeaderService {

  constructor() { }

  fetchSubHeaderData(): Observable<any[]> {
    const response1 = users;
    const response2 = average;
    const response3 = males;
    const response4 = females;
    const response5 = collection;

    return forkJoin([response1, response2, response3, response4, response5]);
  }

}

