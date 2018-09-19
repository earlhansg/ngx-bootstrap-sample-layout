import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonsModule } from 'ngx-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  imports: [
    CommonModule,
    ButtonsModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  exports: [
    ButtonsModule,
    BsDropdownModule
  ]
})
export class AppBootstrapModule {}