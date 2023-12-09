import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgxAlltextModule } from 'NgxAlltext';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home.component';
import { C1Component } from './components/c1.component';
import { C2Component } from './components/c2.component';
import { C3Component } from './components/c3.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    C1Component,
    C2Component,
    C3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxAlltextModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
