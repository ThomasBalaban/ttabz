import { Component, OnInit, Input, HostListener, ElementRef, ViewChild, OnDestroy  } from '@angular/core';
import { PortPieceService } from 'src/app/services/port-piece.service';
import { PortPiece } from 'src/app/models/port-piece.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-portfolio-piece',
  templateUrl: './portfolio-piece.component.html',
  styleUrls: ['./portfolio-piece.component.scss']
})

export class PortfolioPieceComponent implements OnInit, OnDestroy {
  private desktop = false;
  private srcHeight: number;
  private srcWidth: number;
  private portPieces: PortPiece[] = [];
  private portPieceSubscription: Subscription;

  @Input() piece;

  @ViewChild('background')
  background: ElementRef;

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.srcHeight = window.innerHeight;
    this.srcWidth = window.innerWidth;
    this.checkForDesktop(this.srcWidth, this.srcHeight);
  }

  constructor(
    private portPieceService: PortPieceService,
  ) {
    this.onResize();
  }

  ngOnInit() {
    this.portPieceSubscription = this.portPieceService.getData().subscribe( (res: PortPiece[]) => {
      this.portPieces = res;
    });
  }

  ngOnDestroy() {
    this.portPieceSubscription.unsubscribe();
  }

  checkForDesktop(width, height) {
    if (width >= 1024 && height >= 768) {
      this.desktop = true;
    } else {
      this.desktop = false;
    }
  }

  openDetails(index: any) {
    index.on = !index.on;
  }

  openPiece(event) {
    const backgroundT = this.background.nativeElement;
    const eventTPiece = event.target.closest('.portfolioPiece');

    function openBackground() {
      backgroundT.style.display = 'block';
      backgroundT.classList.remove('closed');
      backgroundT.classList.add('open');
    }

    if ( !eventTPiece.classList.contains('fullscreen') ) {
      eventTPiece.classList.add('fullscreen');
      openBackground();
    } else {
      eventTPiece.classList.add('closed');
      eventTPiece.classList.remove('fullscreen');
      backgroundT.classList.remove('open');

      setTimeout( () => {
        eventTPiece.classList.remove('closed');
        backgroundT.classList.remove('open');
        backgroundT.classList.add('closed');
      }, 300);

      setTimeout( () => {
        eventTPiece.classList.remove('closed');
        backgroundT.style.display = 'none';
        backgroundT.classList.remove('closed');
      }, 500);
    }
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
