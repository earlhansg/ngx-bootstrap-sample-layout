import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingComponent } from './landing.component';

import { LandingRoutingModule } from './landing-routing.module';
import { SectionsModule } from './sections/sections.module';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  imports: [
    CommonModule,
    LandingRoutingModule,
    SectionsModule,
    AngularFontAwesomeModule
  ],
  declarations: [
    LandingComponent
  ]
})
export class LandingModule { }