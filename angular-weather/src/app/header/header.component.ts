import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import {Verbs} from '../mock-varbs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isSettingsMode: boolean;
  verbs = Verbs;
  lastUpdate : string;

  constructor(
    private router:Router,
  ) { 
    router.events.subscribe(() => {
       if(router.url === `/weatherSelect`){
        this.isSettingsMode = false;
       }
       if(router.url === `/weatherView`){
        this.isSettingsMode = true;
       }

       if(!!this.verbs.lastUpdate){
          var currentdate = this.verbs.lastUpdate; 
          this.lastUpdate =  
                      currentdate.getDate() + "/"
                    + (currentdate.getMonth()+1)  + "/" 
                    + currentdate.getFullYear() + "    "  
                    + currentdate.getHours() + ":"  
                    + ((currentdate.getMinutes() <= 9)? ("0" + currentdate.getMinutes()) : currentdate.getMinutes()) + ":" 
                    + ((currentdate.getSeconds() <= 9)? ("0" + currentdate.getSeconds()) : currentdate.getSeconds());
      }
  });
  
  }

  ngOnInit() {
    this.isSettingsMode = true;
    this.verbs.lastUpdate = null;
    console.log(this.verbs.lastUpdate);
  }

  
  settings(): void {
    this.isSettingsMode = false;
  }

  goBack(): void {
    this.isSettingsMode = true;
    this.router.navigate(['/weatherView']);
  }

}
