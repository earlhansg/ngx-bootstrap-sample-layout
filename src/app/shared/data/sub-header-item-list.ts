import {
         TotalUsersModel,
         AverageTimeModel,
         TotalMalesModel,
         TotalFemalesModel,
         TotalCollectionsModel } from '../interfaces/sub-header-item-model';


export const users: TotalUsersModel[] = [
  {
    title        : 'Total Users',
    icon         : '',
    href         : 'cloud-download',
    previousTotal: 333,
    currentTotal : 222,
  }
];

export const average: AverageTimeModel[] = [
  {
    title        : 'Average Time',
    icon         : '',
    href         : '/average-time',
    previousTotal: 221.2,
    currentTotal : 331.11,
  }
];

export const males: TotalMalesModel[] = [
  {
    title        : 'Total-males',
    icon         : '',
    href         : '/total-males',
    previousTotal: 4132,
    currentTotal : 2334,
  }
];

export const females: TotalFemalesModel[] = [
  {
    title        : 'Total Females',
    icon         : '',
    href         : '/total-females',
    previousTotal: 2212,
    currentTotal : 331.11,
  }
];

export const collection: TotalCollectionsModel[] = [
  {
    title        : 'Total Collections',
    icon         : '',
    href         : '/total-collections',
    previousTotal: 1000,
    currentTotal : 3321,
  }
];