import { Component, OnInit } from '@angular/core';

import { EmployeeModel } from '../interface/employee.component.model';

import { EmployeeService } from '../employee.component.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService
      .fetchEmployee()
      .subscribe(response => console.log(response));
  }

}
