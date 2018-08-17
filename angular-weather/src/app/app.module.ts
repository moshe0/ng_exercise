import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WeatherViewComponent } from './weather-view/weather-view.component';
import { WeatherSelectComponent } from './weather-select/weather-select.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WeatherViewComponent,
    WeatherSelectComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
