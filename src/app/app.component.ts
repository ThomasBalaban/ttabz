import { Component } from '@angular/core';
import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  animateChild
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('animRoutes', [
      transition('* <=> *', [
        group([
          query(
            ':enter',
            [
              style({
                opacity: 0,
                top: '-150%',
                position: 'absolute'
              }),
              animate(
                '.42s linear',
                style({
                  opacity: 1,
                  top: '73px'
                })
              ),
              animateChild()
            ],
            { optional: true }
          ),
          query(
            ':leave',
            [
              style({
                opacity: 1,
                position: 'absolute'
              }),
              animate(
                '.15s',
                style({
                  opacity: 0,
                })
              ), animateChild()
            ],
            { optional: true }
          )
        ])
      ])
    ])
  ]
})
export class AppComponent {
  title = 'Thomas Balaban - Pittsburgh Web Designer';

  getPage(outlet) {
    return outlet.activatedRouteData.page || 'home';
  }
}
