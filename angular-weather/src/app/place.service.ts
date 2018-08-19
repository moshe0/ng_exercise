import { Injectable } from '@angular/core';

import { Place } from './place';
import { Places } from './mock-places';
import { Observable, of } from 'rxjs';
import { environment } from './environment';
import { HttpClient , HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  constructor(private http: HttpClient) { }

        
  getPlaces(): Observable<Place[]> {
    return of(Places);
  }

  getTodayWeather(cityName, countryName ): Observable<any> {
    return this.http.get(environment.baseUrl + cityName  + ',' + countryName +
    '&appid='+ environment.appId +'&units=' + environment.units);
 } 


 private extractData(res: any) {
   let body = res.json();
   return body.list || { };
 }

 private handleError (error: any) {
   let errMsg: string;
     errMsg = error.message ? error.message : error.toString();
   console.error(errMsg);
   return Observable.throw(errMsg);
 }









}
