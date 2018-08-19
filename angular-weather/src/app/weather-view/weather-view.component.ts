import { Component, OnInit} from '@angular/core';

import { Place } from '../place';
import {PlaceService} from '../place.service';



@Component({
  selector: 'app-weather-view',
  templateUrl: './weather-view.component.html',
  styleUrls: ['./weather-view.component.css']
})
export class WeatherViewComponent implements OnInit {
  selectedPlace: Place;
  places : Place[];

  constructor(private placeService : PlaceService) { }

  ngOnInit() {
    this.getPlaces();
  }

  getPlaces() : void{
    this.placeService.getPlaces().subscribe(places => this.places = places);
    this.places = this.places.filter(place => place.isView === true);

  }

 

}
