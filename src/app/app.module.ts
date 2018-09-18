import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppBootstrapModule } from '@app/core/app-bootstrap.module';
import { AppRoutingModule } from '@app/app-routing.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppBootstrapModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
