import { Injectable } from '@angular/core';

import { Observable, forkJoin, of } from 'rxjs';

import { header, sideHeader } from '../data/employee-header-item-list';

@Injectable()
export class EmployeeHeaderService {

  constructor() { }

   fetchEmployeeHeaderData(): Observable<any[]> {
    const headers = header;
    const sideheaders = sideHeader;
    return forkJoin([of(headers), of(sideheaders)]);
  }

}

