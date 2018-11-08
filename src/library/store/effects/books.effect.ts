import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as fromActions from '../actions/books.action';
import { BooksService } from '../../services/books.service';

@Injectable()
export class BooksEffects {
  constructor(
    private actions$: Actions,
    private booksService: BooksService
  ) {}

  @Effect()
  loadBooks$ = this.actions$.ofType(fromActions.BooksActionTypes.LoadBooks).pipe(
    switchMap(() => {
      return this.booksService
        .getBooks()
        .pipe(
          map(Books => new fromActions.LoadBooksSuccess(Books)),
          catchError(error => of(new fromActions.LoadBooksFailure()))
        );
    })
  );
}