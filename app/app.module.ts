
//imports
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';


//declarations
import { AppComponent }  from './app.component';
import { CatListComponent} from './cats/cat-list.component';
import { HomeComponent } from './home/home.component'; 
import { routing } from './app.routes';
import { NgbdCarouselBasic } from './carousel/carousel.component';

@NgModule({
  imports:      [ routing, HttpModule, BrowserModule, FormsModule, ReactiveFormsModule, JsonpModule, NgbModule.forRoot() ],
  declarations: [ AppComponent, NgbdCarouselBasic, HomeComponent, CatListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
