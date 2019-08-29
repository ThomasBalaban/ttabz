import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-about-plate',
  templateUrl: './about-plate.component.html',
  styleUrls: ['./about-plate.component.scss']
})
export class AboutPlateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
  scrollHandler() {
    const htag = document.getElementById('aboutH');
    const ptag = document.getElementById('aboutP');
    const button = document.getElementById('aboutButton');
    const alphaArray = [htag, ptag, button];
    console.log('myAss');
    // tslint:disable-next-line: prefer-for-of
    for (let index = 0; index < alphaArray.length; index++) {
      if (window.pageYOffset >= 400) {
        alphaArray[index].style.opacity = '1';
        alphaArray[index].style.transform = 'translateY(0px)';
      } else {
        alphaArray[index].style.opacity = '0';
        alphaArray[index].style.transform = 'translateY(-35px)';
      }
    }
  }
}
