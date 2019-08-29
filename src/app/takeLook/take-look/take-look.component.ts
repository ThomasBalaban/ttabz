import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-take-look',
  templateUrl: './take-look.component.html',
  styleUrls: ['./take-look.component.scss']
})
export class TakeLookComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
  scrollHandler() {
    const htag = document.getElementById('lookH');
    const button = document.getElementById('lookButton');
    const gammaArray = [htag, button];
    console.log('myAss');
    // tslint:disable-next-line: prefer-for-of
    for (let index = 0; index < gammaArray.length; index++) {
      if (window.pageYOffset >= 1600) {
        gammaArray[index].style.opacity = '1';
        gammaArray[index].style.transform = 'translateY(0px)';
      } else {
        gammaArray[index].style.opacity = '0';
        gammaArray[index].style.transform = 'translateY(-35px)';
      }
    }
  }
}
