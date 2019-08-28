import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PortPiece } from '../models/port-piece.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, retry } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

@Injectable({
  providedIn: 'root'
})
export class PortPieceService {

  constructor(
    private http: HttpClient
  ) { }

  public static handleError(error: HttpErrorResponse | any) {
    return new ErrorObservable(error);
  }

  getPortPieceData(retries = 0): Observable<any> {
    return this.http.get('./assets/portfolio-pieces.json').pipe(
      map( (res: any) => {
        return res;
      }),
      retry(retries),
      catchError(PortPieceService.handleError)
    );
  }

  public getData(retries?: number) {
    return this.getPortPieceData(retries);
  }
}
