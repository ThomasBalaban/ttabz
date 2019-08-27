import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioPieceComponent } from './portfolio-piece.component';

describe('PortfolioPieceComponent', () => {
  let component: PortfolioPieceComponent;
  let fixture: ComponentFixture<PortfolioPieceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioPieceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioPieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
