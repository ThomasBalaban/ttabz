import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio-piece',
  templateUrl: './portfolio-piece.component.html',
  styleUrls: ['./portfolio-piece.component.scss']
})
export class PortfolioPieceComponent implements OnInit {
  @Input() piece;

  constructor() { }

  ngOnInit() {
  }

}
