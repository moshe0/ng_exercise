import { Injectable } from '@angular/core';

import { Place } from './place';
import { Places } from './mock-places';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  constructor() { }


        
  getPlaces(): Observable<Place[]> {
    return of(Places);
  }
}
