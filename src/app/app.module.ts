import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {HttpModule} from '@angular/http';
import { AppComponent }  from './app.component';

import { profileComponent } from './components/profile.components';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule ],
  declarations: [ AppComponent, profileComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
