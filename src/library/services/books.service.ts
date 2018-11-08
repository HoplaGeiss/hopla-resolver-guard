import 'rxjs/add/observable/throw';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';

import { Book } from './../models/book.model';

@Injectable()
export class BooksService {
  constructor(
    private http: HttpClient
  ) {}

  getBooks(): Observable<Book[]> {
    return this.http
      .get<Book[]>(`/api/books`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}