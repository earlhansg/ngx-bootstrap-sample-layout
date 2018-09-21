import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppBootstrapModule } from '@app/core/app-bootstrap.module';

import { NavigationComponent } from './navigation/navigation.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AngularFontAwesomeModule,
    AppBootstrapModule
  ],
  declarations: [
    NavigationComponent,
    SubHeaderComponent
  ],
  exports: [
    NavigationComponent,
    SubHeaderComponent
  ],
  providers: [],
  entryComponents: []
})
export class SectionsModule { }