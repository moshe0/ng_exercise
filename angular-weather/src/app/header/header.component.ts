import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isSettingsMode: boolean

  constructor(
    private router:Router,
  ) { 
    router.events.subscribe(() => {
  });
  }

  ngOnInit() {
    this.isSettingsMode = true;
  }

  
  settings(): void {
    this.isSettingsMode = false;
    // this.location.back();
  }

  goBack(): void {
    this.isSettingsMode = true;
    this.router.navigate(['/weatherView']);
  }

}
