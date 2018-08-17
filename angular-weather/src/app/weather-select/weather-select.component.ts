import { Component, OnInit, Input} from '@angular/core';

import { Place } from '../place';
import { Places } from '../mock-places';

@Component({
  selector: 'app-weather-select',
  templateUrl: './weather-select.component.html',
  styleUrls: ['./weather-select.component.css']
})
export class WeatherSelectComponent implements OnInit {

  @Input() place: Place;
  places = Places;
  selectedPlace: Place;

  constructor() { }

  ngOnInit() {
  }

  onSelect(place: Place): void {
    
    place.isView = !place.isView;
  }

}
