import { Component, OnInit, Input} from '@angular/core';

import { Place } from '../place';
import {PlaceService} from '../place.service';
import {Verbs} from '../mock-varbs';


@Component({
  selector: 'app-weather-select',
  templateUrl: './weather-select.component.html',
  styleUrls: ['./weather-select.component.css']
})
export class WeatherSelectComponent implements OnInit {

  @Input() place: Place;
  places : Place[];
  selectedPlace: Place;
  verbs = Verbs;

  constructor(private placeService : PlaceService) { }

  ngOnInit() {
    this.getPlaces();
  }

  getPlaces() : void{
    this.placeService.getPlaces().subscribe(places => this.places = places);
  }

  onSelect(place: Place): void {
    place.isView = !place.isView;
    this.verbs.lastUpdate = new Date(); 
  }

}
