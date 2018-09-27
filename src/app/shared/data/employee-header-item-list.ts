import { EmployeeHeaderModel, EmployeeSideHeaderModel } from '../interfaces/employee-header-item-model';


export const header: EmployeeHeaderModel[] = [
  {
    title : 'Department'
  },
  {
    title : 'Sort by'
  },
  {
    title : 'Location'
  }
];

export const sideHeader: EmployeeSideHeaderModel[] = [
    {
      title : 'List',
      icon : 'th-list'
    },
    {
      title : 'Document',
      icon : 'file'
    },
    {
      title : 'Chart',
      icon : 'area-chart'
    },
    {
        title : 'Message',
        icon : 'envelope-o'
    }
  ];