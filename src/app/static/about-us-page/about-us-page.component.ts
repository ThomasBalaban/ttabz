import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us-page',
  templateUrl: './about-us-page.component.html',
  styleUrls: ['./about-us-page.component.scss']
})
export class AboutUsPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openItem(item) {
    const evTarget = item.target.closest('.image');

    if ( evTarget.classList.contains('open') ) {
      evTarget.classList.remove('open')
    } else {
      evTarget.classList.add('open')
    }
  }

}
