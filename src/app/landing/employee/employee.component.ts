import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

// import { EmployeeSideHeaderModel } from '@app/shared/interfaces/employee-header-item-model';
// import { DepartmentModel,
//          PositionModel,
//          LocationModel } from './interface/employee.component.model';

// import { EmployeeHeaderService } from '@app/shared/services/employee-header-item-list.service';
// import { EmployeeService } from './employee.component.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  // public sideHeaders        : EmployeeSideHeaderModel[];
  // public departments        : DepartmentModel[];
  // public positions          : PositionModel[];
  // public locations          : LocationModel[];
  // public selectedDepartment : string;
  // public selectedPosition   : string;
  // form: FormGroup;
  // public selectedlocation   : string;

  filters: Object;

  constructor() { }

  ngOnInit() {

    // this.buildForm();

    // this.employeeHeaderService
    //   .fetchSideHeaderData()
    //   .subscribe(responseList => this.sideHeaders = responseList);

    // this.employeeService
    //   .fetchEmployeeData()
    //   .subscribe(employeeDataList => {
    //     this.departments = employeeDataList[0];
    //     this.positions   = employeeDataList[1];
    //     this.locations   = employeeDataList[2];
    //   });
  }
  // onNotify(data : any): void {
  //   console.log(data);
  // }
  // buildForm(): void {
  //   this.form = this.fb.group({
  //     department: new FormControl('')
  //   });
  // }
  // search(filters: any): void {
  //   Object.keys(filters).forEach(key => filters[key] === '' ? delete filters[key] : key);
  //    this.groupFilters.emit(filters);
  // }
}
