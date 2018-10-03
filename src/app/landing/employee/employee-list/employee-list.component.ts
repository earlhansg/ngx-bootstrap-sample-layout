import { Component, OnInit, Input } from '@angular/core';

import { EmployeeModel } from '../interface/employee.component.model';

import { EmployeeService } from '../employee.component.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employee : EmployeeModel[];
  @Input() ngClass: string | string[] | Set<string> | { [klass: string]: any; };

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService
      .fetchEmployee()
      .subscribe(response => this.checkDataEmployee(response));
  }

  checkDataEmployee(data: any) {
    const users = data;
    users.map(user => {
      user.fullname = `${user.firstname} ${user.lastname}`;
      user.status   = user.active ? 'active' : '';
      user.gender   = user.sex === 'male' ? 'M' : 'F';
    });
    this.employee = users;
  }

}
