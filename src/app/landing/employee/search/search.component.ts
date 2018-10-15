import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

import { EmployeeService } from '../employee.component.service';
import { EmployeeHeaderService } from '@app/shared/services/employee-header-item-list.service';

import { EmployeeSideHeaderModel } from '@app/shared/interfaces/employee-header-item-model';
import { DepartmentModel,
         PositionModel,
         LocationModel } from '../interface/employee.component.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  form        : FormGroup;
  sideHeaders : EmployeeSideHeaderModel[];
  departments : DepartmentModel[];
  positions   : PositionModel[];
  locations   : LocationModel[];

  @Output() autoSearch: EventEmitter<string> = new EventEmitter<string>();
  @Output() groupFilters: EventEmitter<any>  = new EventEmitter<any>();

  constructor(private fb: FormBuilder,
              private employeeService: EmployeeService,
              private employeeHeaderService: EmployeeHeaderService) { }

  ngOnInit(): void {
    this.buildForm();

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

  buildForm(): void {
    this.form = this.fb.group({
      department: new FormControl(''),
      position: new FormControl(''),
      location: new FormControl('')
    });
  }

  search(filters: any): void {
    Object.keys(filters).forEach(key => filters[key] === '' ? delete filters[key] : key);
    this.groupFilters.emit(filters);
  }



}
