import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuItemListService } from './services/menu-item-list.service';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [ MenuItemListService ],
  exports: [
    CommonModule
  ],
  entryComponents: [],
})
export class SharedModule { }