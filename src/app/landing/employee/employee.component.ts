import { Component, OnInit } from '@angular/core';

import { EmployeeSideHeaderModel } from '@app/shared/interfaces/employee-header-item-model';
import { DepartmentModel,
         PositionModel,
         LocationModel } from './interface/employee.component.model';

import { EmployeeHeaderService } from '@app/shared/services/employee-header-item-list.service';
import { EmployeeService } from './employee.component.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  public sideHeaders  : EmployeeSideHeaderModel[];
  public departments  : DepartmentModel[];
  public positions    : PositionModel[];
  public locations    : LocationModel[];
  public department   : any;

  constructor(private employeeHeaderService: EmployeeHeaderService,
              private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeHeaderService
      .fetchSideHeaderData()
      .subscribe(responseList => this.sideHeaders = responseList);

    this.employeeService
      .fetchEmployeeData()
      .subscribe(employeeDataList => {
        this.departments = employeeDataList[0];
        this.positions   = employeeDataList[1];
        this.locations   = employeeDataList[2];
      });
  }

  showValue(data: any) {
    console.log(data);
  }
  showDepartment(item: any) {
    // const department = item = undefined ? 'Choose One';
    console.log(item);
  }

}
