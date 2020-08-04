import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from './app.component';
import { ListmovieComponent } from './listmovie/listmovie.component';
import {error} from './pageNotFound/error';
import { MovieService } from './movie.service';
import { HttpClientModule } from '@angular/common/http';
import { ViewpageComponent } from './viewpage/viewpage.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  declarations: [ AppComponent, ListmovieComponent, ViewpageComponent, error],
  bootstrap:    [ AppComponent ],
  providers: [ MovieService ]
})
export class AppModule { }
