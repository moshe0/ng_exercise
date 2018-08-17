import { Component, OnInit} from '@angular/core';

import { Place } from '../place';
import { Places } from '../mock-places';



@Component({
  selector: 'app-weather-view',
  templateUrl: './weather-view.component.html',
  styleUrls: ['./weather-view.component.css']
})
export class WeatherViewComponent implements OnInit {
  places = Places.filter(place => place.isView === true);
  selectedPlace: Place;

  constructor() { }

  ngOnInit() {
  }

 

}
