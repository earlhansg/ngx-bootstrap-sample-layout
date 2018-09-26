import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppBootstrapModule } from '@app/core/app-bootstrap.module';

import { EmployeeComponent } from './employee.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AngularFontAwesomeModule,
    AppBootstrapModule
  ],
  declarations: [
    EmployeeComponent
  ],
  exports: [
    EmployeeComponent
  ],
  providers: [],
  entryComponents: []
})
export class EmployeeModule { }