import { Component, OnInit, Input,
         OnChanges, SimpleChanges, SimpleChange } from '@angular/core';

import { EmployeeModel } from '../interface/employee.component.model';

import { EmployeeService } from '../employee.component.service';
import { employee } from '@app/landing/employee/data/employee-item-list';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnChanges, OnInit {

  public employee     : EmployeeModel[];
  public filterList   = employee;
  @Input() ngClass    : string | string[] | Set<string> | { [klass: string]: any; };
  @Input() department : string;
  private _department: any;
  // @Input() position   : string;
  // @Input() location   : string;

  constructor(private employeeService: EmployeeService) { }

  ngOnChanges(changes: SimpleChanges) {
    const department: SimpleChange = changes.department;
    this._department = department;
    console.log('bag.o nga department', this._department.currentValue);
    if (this._department.currentValue !== undefined) {
      console.log('undefined');
      this.filterEmployee(this._department.currentValue);
    }
  }

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

  filterEmployee(data : any) : void {
    this.filterList = this.employee.filter(x => x.department === data);
    console.log(this.employee);
  }
}
