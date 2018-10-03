export interface DepartmentModel {
    name     : string;
    details ?: string;
    icon    ?: string;
}

export interface PositionModel {
    name     : string;
    details ?: string;
    icon    ?: string;
}

export interface LocationModel {
    address  : string;
    details ?: string;
    icon    ?: string;
}

export interface EmployeeModel {
    firstname   : string;
    lastname    : string;
    position    : string;
    address     : string;
    birthdate   : string;
    department  : string;
    sex         : string;
    location    : string;
    active      : boolean;
}