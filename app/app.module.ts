import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent }  from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';
import { NgbdCarouselBasic } from './carousel/carousel.component';

import { HomeComponent } from './home/home.component'; 

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, JsonpModule, NgbModule.forRoot() ],
  declarations: [ AppComponent, NgbdCarouselBasic, HomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
