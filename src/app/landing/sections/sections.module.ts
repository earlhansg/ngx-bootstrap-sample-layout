import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NavigationComponent } from './navigation/navigation.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [NavigationComponent],
  exports: [NavigationComponent],
  providers: [],
  entryComponents: []
})
export class SectionsModule { }