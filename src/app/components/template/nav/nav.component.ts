import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent implements OnInit {

  active = false;

  constructor() { }

  ngOnInit() {
  }

  openNav() {
    if (window.innerWidth < 769 ) {
      this.active = !this.active;
    }
  }

}
