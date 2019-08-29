import { Component, OnInit, Input } from '@angular/core';
import { PortPieceService } from 'src/app/services/port-piece.service';
import { PortPiece } from 'src/app/models/port-piece.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-portfolio-piece',
  templateUrl: './portfolio-piece.component.html',
  styleUrls: ['./portfolio-piece.component.scss']
})
export class PortfolioPieceComponent implements OnInit {
  @Input() piece;

  selectedIndex: any;

  public portPieces: PortPiece[] = [];

  private portPieceSubscription: Subscription;

  constructor(
    private portPieceService: PortPieceService
  ) { }

  ngOnInit() {
    this.portPieceSubscription = this.portPieceService.getData().subscribe( (res: PortPiece[]) => {
      console.log(res);
      this.portPieces = res;
    });
  }

  openPiece(index: any) {
    index.on = !index.on;
  }

}
