import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isSettingsMode: boolean

  constructor() { }

  ngOnInit() {
    this.isSettingsMode = true;
  }

  
  settings(): void {
    this.isSettingsMode = false;
    // this.location.back();
  }

  goBack(): void {
    this.isSettingsMode = true;
    // this.location.back();
  }

}
