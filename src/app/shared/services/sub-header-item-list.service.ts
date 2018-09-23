import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import {
    TotalUsersModel,
    AverageTimeModel,
    TotalMalesModel,
    TotalFemalesModel,
    TotalCollectionsModel } from '../interfaces/sub-header-item-model';

import { users, average, males, females, collection } from '../data/sub-header-item-list';


@Injectable()
export class SubHeaderService {

  constructor() { }

  fetchUsers(): Observable<TotalUsersModel[]> {
    return of(users);
  }
  fetchAverage(): Observable<AverageTimeModel[]> {
    return of(average);
  }
  fetchMales(): Observable<TotalMalesModel[]> {
    return of(males);
  }
  fetchFemales(): Observable<TotalFemalesModel[]> {
    return of(females);
  }
  fetchTotalCollections(): Observable<TotalCollectionsModel[]> {
    return of(collection);
  }


}