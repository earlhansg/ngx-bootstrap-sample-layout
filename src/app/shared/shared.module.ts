import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuItemListService } from './services/menu-item-list.service';
import { SubHeaderService } from './services/sub-header-item-list.service';
import { EmployeeHeaderService } from './services/employee-header-item-list.service';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    MenuItemListService,
    SubHeaderService,
    EmployeeHeaderService
  ],
  exports: [
    CommonModule
  ],
  entryComponents: [],
})
export class SharedModule { }