import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})


export class NavComponent implements OnInit {

  hchange = false;

  active = false;

  /*@HostListener('window:scroll', ['$event'])
  scrollHandler() {
    const nav = document.getElementById('primeNav');
    const hold = document.getElementById('navHoldings');

    if (window.pageYOffset >= 600) {
      nav.style.position = 'fixed';
      nav.style.top = '0';
      hold.style.opacity = '1';
    } else {
      nav.style.position = 'absolute';
      nav.style.top = 'inherit';
      hold.style.opacity = '0';
    }
  }*/

  constructor() { }

  ngOnInit() {
  }

  openNav() {
      this.hchange = !this.hchange;
  }
}
