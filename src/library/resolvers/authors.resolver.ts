import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { filter, switchMap, take, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

import * as fromStore from '../store';
import { Author } from './../models/author.model';
import { of } from 'rxjs/observable/of';

@Injectable()
export class AuthorsResolver implements Resolve<Author[]> {
  constructor(
    private store: Store<any>
  ) { }

  resolve(): Observable<Author[]> {
    return this.store.select(fromStore.getAuthorsLoaded).pipe(
      tap(loaded => !loaded ? this.store.dispatch(new fromStore.LoadAuthors()) : undefined ),
      filter(loaded => loaded),
      take(1),
      switchMap(() => this.store.pipe(select(fromStore.getAuthorsData), take(1)))
    );
  }
}