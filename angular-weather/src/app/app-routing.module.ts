import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import {WeatherSelectComponent} from './weather-select/weather-select.component'
import {WeatherViewComponent} from './weather-view/weather-view.component'


const routes: Routes = [
  { path: '', redirectTo: '/weatherView', pathMatch: 'full' },
  { path: 'weatherView', component: WeatherViewComponent },
  { path: 'weatherSelect', component: WeatherSelectComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
