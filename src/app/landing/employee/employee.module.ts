import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppBootstrapModule } from '@app/core/app-bootstrap.module';

import { EmployeeComponent } from './employee.component';

import { EmployeeService } from './employee.component.service';
import { EmployeeListComponent } from './employee-list/employee-list.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AngularFontAwesomeModule,
    AppBootstrapModule,
    FormsModule
  ],
  declarations: [
    EmployeeComponent,
    EmployeeListComponent
  ],
  exports: [
    EmployeeComponent
  ],
  providers: [EmployeeService],
  entryComponents: []
})
export class EmployeeModule { }