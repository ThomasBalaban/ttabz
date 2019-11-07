import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ContactForm } from '../models/contact-form';

@Injectable({
  providedIn: 'root'
})

export class ContactServiceService {

  ServerUrl = 'http://thomasbalaban.com/';
  errorData: {};

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(
    private http: HttpClient
  ) { }

  contactForm(formdata: ContactForm) {
    return this.http.post<ContactForm>(this.ServerUrl + 'email_contact.php', formdata, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log('an error has occured: ', error.error.message);
    } else {
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }

    this.errorData = {
      errorTitle: 'Oops! Failed to send.',
      errorDesc: 'Something bad happened. Please try again later or contact me directly.'
    };

    return throwError(this.errorData);
  }
}
