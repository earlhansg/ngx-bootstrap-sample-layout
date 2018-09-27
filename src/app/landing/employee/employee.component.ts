import { Component, OnInit } from '@angular/core';

import { EmployeeHeaderModel,
         EmployeeSideHeaderModel } from '@app/shared/interfaces/employee-header-item-model';

import { EmployeeHeaderService } from '@app/shared/services/employee-header-item-list.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  public headers     : EmployeeHeaderModel[];
  public sideHeaders : EmployeeSideHeaderModel[];

  constructor(private employeeHeaderService: EmployeeHeaderService) { }

  ngOnInit() {
    this.employeeHeaderService
      .fetchEmployeeHeaderData()
      .subscribe(responseList => {
        this.headers     = responseList[0];
        this.sideHeaders = responseList[1];
    });
  }

}
