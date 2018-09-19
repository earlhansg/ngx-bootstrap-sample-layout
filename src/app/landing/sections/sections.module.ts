import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppBootstrapModule } from '@app/core/app-bootstrap.module';

import { NavigationComponent } from './navigation/navigation.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AngularFontAwesomeModule,
    AppBootstrapModule
  ],
  declarations: [NavigationComponent],
  exports: [NavigationComponent],
  providers: [],
  entryComponents: []
})
export class SectionsModule { }