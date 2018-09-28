import { Injectable } from '@angular/core';

import { Observable, forkJoin, of } from 'rxjs';

import { department, position, location } from './data/employee-item-list';

@Injectable()
export class EmployeeService {

departments: any[] = [];
positions  : any[] = [];
locations  : any[] = [];

constructor() { }

  fetchEmployeeData(): Observable<any[]> {
    const response1 = department;
    const response2 = position;
    const response3 = location;

    response1.forEach(item => this.departments.push(item));
    response2.forEach(item => this.positions.push(item));
    response3.forEach(item => this.locations.push(item));

    return forkJoin([of(this.departments), of(this.positions), of(this.locations)]);
  }

}

