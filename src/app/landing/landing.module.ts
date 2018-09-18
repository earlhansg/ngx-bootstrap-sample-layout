import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingComponent } from './landing.component';

import { LandingRoutingModule } from './landing-routing.module';
import { SectionsModule } from './sections/sections.module';


@NgModule({
  imports: [
    CommonModule,
    LandingRoutingModule,
    SectionsModule
  ],
  declarations: [
    LandingComponent
  ]
})
export class LandingModule { }