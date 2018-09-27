import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { sideHeader } from '../data/employee-header-item-list';

@Injectable()
export class EmployeeHeaderService {

  constructor() { }

   fetchSideHeaderData(): Observable<any[]> {
    return of(sideHeader);
  }

}

