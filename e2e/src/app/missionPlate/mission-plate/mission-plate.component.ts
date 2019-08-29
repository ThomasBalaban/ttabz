import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-mission-plate',
  templateUrl: './mission-plate.component.html',
  styleUrls: ['./mission-plate.component.scss']
})
export class MissionPlateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
  scrollHandler() {
    const htag = document.getElementById('missionH');
    const ptag = document.getElementById('missionP');
    const box1 = document.getElementById('boxA');
    const box2 = document.getElementById('boxB');
    const box3 = document.getElementById('boxC');
    const box4 = document.getElementById('boxD');
    const betaArray = [htag, ptag, box1, box2, box3, box4];
    console.log('myAss');
    // tslint:disable-next-line: prefer-for-of
    for (let index = 0; index < betaArray.length; index++) {
      if (window.pageYOffset >= 700) {
        betaArray[index].style.opacity = '1';
        betaArray[index].style.transform = 'translateY(0px)';
      } else {
        betaArray[index].style.opacity = '0';
        betaArray[index].style.transform = 'translateY(-35px)';
      }
    }
  }
}
