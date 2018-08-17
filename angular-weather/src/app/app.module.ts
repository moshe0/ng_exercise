import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WeatherViewComponent } from './weather-view/weather-view.component';
import { WeatherSelectComponent } from './weather-select/weather-select.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WeatherViewComponent,
    WeatherSelectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
