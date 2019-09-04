import { Component, OnInit, Input, HostListener } from '@angular/core';
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
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    const xwidth = event.target.innerWidth;
    const xheight = event.target.innerHeight

    if (xwidth >= 1024 && xheight >= 768) {
      this.desktop = true;
    } else {
      this.desktop = false;
    }
  }

  selectedIndex: any;
  mediaQuery$: Subscription;
  activeMediaQuery: string;
  desktop: boolean = false;

  public portPieces: PortPiece[] = [];
  private portPieceSubscription: Subscription;

  constructor(
    private portPieceService: PortPieceService,
  ) { }

  ngOnInit() {
    this.portPieceSubscription = this.portPieceService.getData().subscribe( (res: PortPiece[]) => {
      this.portPieces = res;
    });
  }

  openPiece(index: any) {
    index.on = !index.on;
  }

  onCardHover(event) {
    const items = document.querySelectorAll('.portfolioPiece');
    console.log(items[1])

    if (event.type == 'mouseover' && this.desktop) {
      for( let i = 0; i < items.length; i++ ) {
        items[i].classList.add('item-hovered');
      }
      event.target.closest('.portfolioPiece').classList.add('hovered');
    } else {
      for( let i = 0; i < items.length; i++ ) {
        items[i].classList.remove('item-hovered');
      }
      event.target.closest('.portfolioPiece').classList.remove('hovered');
    }
  }

}
