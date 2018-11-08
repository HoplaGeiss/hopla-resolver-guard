import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, filter, take, tap } from 'rxjs/operators';

import * as fromStore from '../store';

@Injectable()
export class BooksGuard implements CanActivate {
  constructor(
    private store: Store<any>
  ) {}

  canActivate(): Observable<boolean> {
    return this.store.select(fromStore.getBooksLoaded).pipe(
      tap(loaded => {
        if (!loaded) return this.store.dispatch(new fromStore.LoadBooks());
      }),
      filter(loaded => loaded),
      take(1),
      catchError(() => of(false))
    );
  }
}