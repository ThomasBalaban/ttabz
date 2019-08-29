import { Component, OnInit, HostListener } from '@angular/core';

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

  hchange: boolean = false;
  btnchange1: boolean = false;
  btnchange2: boolean = false;
  btnchange3: boolean = false;
  btnchange4: boolean = false;
  btnchange5: boolean = false;
  barchange1: boolean = false;
  barchange2: boolean = false;
  barchange3: boolean = false;

  openNav() {
      this.hchange = !this.hchange;
      this.btnchange1 = !this.btnchange1;
      this.btnchange2 = !this.btnchange2;
      this.btnchange3 = !this.btnchange3;
      this.btnchange4 = !this.btnchange4;
      this.btnchange5 = !this.btnchange5;
      this.barchange1 = !this.barchange1;
      this.barchange2 = !this.barchange2;
      this.barchange3 = !this.barchange3;
  }
  @HostListener('window:scroll', ['$event'])
  scrollHandler() {
    const nav = document.getElementById('primeNav');
    const hold = document.getElementById('navHoldings');
    console.log('myAss');
    if (window.pageYOffset >= 600) {
      nav.style.position = 'fixed';
      nav.style.top = '0';
      hold.style.opacity = '1';
    } else {
      nav.style.position = 'absolute';
      nav.style.top = 'inherit';
      hold.style.opacity = '0';
    }
  }

}
