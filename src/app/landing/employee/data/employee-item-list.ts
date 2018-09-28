import { DepartmentModel,
         PositionModel,
         LocationModel   } from '../interface/employee.component.model';

export const department: DepartmentModel[] = [
  {
    name : 'IT'
  },
  {
    name : 'Finance'
  },
  {
    name : 'FrontOffice'
  },
  {
    name : 'HR'
  }
];

export const position: PositionModel[] = [
    {
      name : 'manager'
    },
    {
      name : 'supervisor'
    },
    {
      name : 'admin'
    },
    {
      name : 'csr'
    }
];

export const location: LocationModel[] = [
    {
      address : 'Cagayan de Oro City'
    },
    {
      address : 'Butuan City'
    },
    {
      address : 'Bukidnon'
    },
    {
      address : 'Davao City'
    }
];