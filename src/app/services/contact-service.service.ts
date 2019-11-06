import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {

  constructor(
    private http: HttpClient
  ) { }
}
