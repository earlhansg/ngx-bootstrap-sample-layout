import { Component, OnInit, Input,
         OnChanges, ChangeDetectorRef } from '@angular/core';

import { EmployeeModel } from '../interface/employee.component.model';

import { EmployeeService } from '../employee.component.service';
import { employee } from '@app/landing/employee/data/employee-item-list';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnChanges, OnInit {

  @Input() ngClass     : string | string[] | Set<string> | { [klass: string]: any; };
  @Input() groupFilters: Object;

  employee     : any[] = [];
  filteredUsers: any[] = [];

  constructor(private employeeService: EmployeeService,
              private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  ngOnChanges(): void {
    console.log(this.groupFilters);
    if (this.groupFilters) this.filterUserList(this.groupFilters, this.employee);
  }

  filterUserList(filters: any, employee: any): void {
    this.filteredUsers = this.employee;

    const keys = Object.keys(filters);
    const filterUser = employee => keys.every(key => employee[key] === filters[key]);

    this.filteredUsers = this.employee.filter(filterUser);

    this.ref.detectChanges();
  }

  loadUsers(): void {
    this.employeeService
      .fetchEmployee()
      .subscribe(response => this.checkDataEmployee(response));

    this.filteredUsers = this.filteredUsers.length > 0 ?  this.filteredUsers : this.employee;
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
