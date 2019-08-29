import { TestBed } from '@angular/core/testing';

import { PortPieceService } from './port-piece.service';

describe('PortPieceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PortPieceService = TestBed.get(PortPieceService);
    expect(service).toBeTruthy();
  });
});
