import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromStore from '../store';
import { Author } from './../models/author.model';
import { Book } from './../models/book.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'hopla-library',
  template: `
    <h1>Books:</h1>
    <h3 *ngFor='let book of (books$ | async)'>
      {{ book.title }}
    </h3>

    <h1>Authors:</h1>
    <h3 *ngFor='let author of authors'>
      {{ author.name }}
    </h3>
  `
})
export class LibraryComponent implements OnInit {
  books$: Observable<Book[]>;
  authors: Author[];

  constructor(
    private store: Store<any>,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.books$ = this.store.select(fromStore.getBooksData);
    this.authors = this.route.snapshot.data.authors;
  }
}
