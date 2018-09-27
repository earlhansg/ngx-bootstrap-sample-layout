import { Component, OnInit } from '@angular/core';

import { EmployeeSideHeaderModel } from '@app/shared/interfaces/employee-header-item-model';

import { EmployeeHeaderService } from '@app/shared/services/employee-header-item-list.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  public sideHeaders : EmployeeSideHeaderModel[];

  constructor(private employeeHeaderService: EmployeeHeaderService) { }

  ngOnInit() {
    this.employeeHeaderService
      .fetchSideHeaderData()
      .subscribe(responseList => this.sideHeaders = responseList);
  }

}
