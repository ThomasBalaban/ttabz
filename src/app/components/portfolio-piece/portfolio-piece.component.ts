import { Component, OnInit, Input, HostListener, ElementRef, ViewChild  } from '@angular/core';
import { PortPieceService } from 'src/app/services/port-piece.service';
import { PortPiece } from 'src/app/models/port-piece.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-portfolio-piece',
  templateUrl: './portfolio-piece.component.html',
  styleUrls: ['./portfolio-piece.component.scss']
})
export class PortfolioPieceComponent implements OnInit {
  selectedIndex: any;
  mediaQuery$: Subscription;
  activeMediaQuery: string;
  desktop = false;
  srcHeight: number;
  srcWidth: number;

  public portPieces: PortPiece[] = [];
  private portPieceSubscription: Subscription;

  @Input() piece;

  @ViewChild('portfolio')
  portfolio: ElementRef;

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.srcHeight = window.innerHeight;
    this.srcWidth = window.innerWidth;
    this.checkForDesktop(this.srcWidth, this.srcHeight);
  }

  constructor(
    private portPieceService: PortPieceService,
    private el: ElementRef
  ) {
    this.onResize();
  }

  ngOnInit() {
    this.portPieceSubscription = this.portPieceService.getData().subscribe( (res: PortPiece[]) => {
      this.portPieces = res;
    });
  }

  checkForDesktop(width, height) {
    if (width >= 1024 && height >= 768) {
      this.desktop = true;
    } else {
      this.desktop = false;
    }
  }

  openPiece(index: any) {
    index.on = !index.on;
  }

  onCardHover(event) {
    const items: any = document.querySelectorAll('.portfolioPiece');

    if (event.type === 'mouseover' && this.desktop) {
      for ( const item of items ) {
        item.classList.add('item-hovered');
      }
      event.target.closest('.portfolioPiece').classList.add('hovered');
    } else {
      for ( const item of items ) {
        item.classList.remove('item-hovered');
      }
      event.target.closest('.portfolioPiece').classList.remove('hovered');
    }
  }

}
