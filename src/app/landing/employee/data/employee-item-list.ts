import { DepartmentModel,
         PositionModel,
         LocationModel,
         EmployeeModel  } from '../interface/employee.component.model';

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

export const employee: EmployeeModel[] = [
  {
    firstname  : 'Earl Hans',
    lastname   : 'Genoso',
    position   : 'TSR',
    address    : 'Camaman-an Cagayan de Oro City',
    birthdate  : 'February 26, 1995',
    department : 'IT',
    sex        : 'male',
    location   : 'CDO',
    active     : true
  },
  {
    firstname  : 'Kristy',
    lastname   : 'Almuete',
    position   : 'Admin',
    address    : 'Kauswagan Cagayan de Oro City',
    birthdate  : 'December 26, 1994',
    department : 'HR',
    sex        : 'female',
    location   : 'CDO',
    active     : true
  },
  {
    firstname  : 'Varry',
    lastname   : 'Cruda',
    position   : 'CSR',
    address    : 'Iponan Cagayan de Oro City',
    birthdate  : 'November 7, 1994',
    department : 'Production',
    sex        : 'male',
    location   : 'Bukidnon',
    active     : true
  },
  {
    firstname  : 'Joevanne',
    lastname   : 'Dagasuan',
    position   : 'Auditor',
    address    : 'Nazareth Cagayan de Oro City',
    birthdate  : 'March 1, 1993',
    department : 'Finance',
    sex        : 'male',
    location   : 'Davao',
    active     : false
  },
  {
    firstname  : 'Darrin',
    lastname   : 'Lapida',
    position   : 'TSR',
    address    : 'Patag Cagayan de Oro City',
    birthdate  : 'January 30, 1995',
    department : 'IT',
    sex        : 'male',
    location   : 'Bukidnon',
    active     : true
  },
  {
    firstname  : 'Martin',
    lastname   : 'Bailo',
    position   : 'Cashier',
    address    : 'Taguanao Cagayan de Oro City',
    birthdate  : 'February 7, 1993',
    department : 'Finance',
    sex        : 'male',
    location   : 'Cebu',
    active     : true
  }

];

