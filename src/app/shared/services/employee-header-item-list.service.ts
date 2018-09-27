import { Injectable } from '@angular/core';

import { Observable, forkJoin } from 'rxjs';

import { EmployeeHeaderModel,
         EmployeeSideHeaderModel } from '../interfaces/employee-header-item-model';

import { header, sideHeader } from '../data/employee-header-item-list';

@Injectable()
export class EmployeeHeaderService {

  constructor() { }

  fetchEmployeeHeaderData(): Observable<any[]> {
    const response1 = header;
    const response2 = sideHeader;

    return forkJoin([response1, response2]);
  }

}

