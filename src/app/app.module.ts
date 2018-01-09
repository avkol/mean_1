import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TempComponent } from './temp/temp.component';

import {HttpModule} from '@angular/http';
import {DataService} from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    TempComponent
  ],
  imports: [
    BrowserModule,
	HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
