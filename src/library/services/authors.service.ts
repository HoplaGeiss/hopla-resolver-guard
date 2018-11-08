import { Author } from './../models/author.model';
import 'rxjs/add/observable/throw';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';

import { Book } from './../models/book.model';

@Injectable()
export class AuthorsService {
  constructor(
    private http: HttpClient
  ) {}

  getAuthors(): Observable<Author[]> {
    return this.http
      .get<Author[]>(`/api/authors`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}