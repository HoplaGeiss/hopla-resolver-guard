import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as fromActions from '../actions/authors.action';
import { AuthorsService } from '../../services/authors.service';

@Injectable()
export class AuthorsEffects {
  constructor(
    private actions$: Actions,
    private authorsService: AuthorsService
  ) {}

  @Effect()
  loadAuthors$ = this.actions$.ofType(fromActions.AuthorsActionTypes.LoadAuthors).pipe(
    switchMap(() => {
      return this.authorsService
        .getAuthors()
        .pipe(
          map(Authors => new fromActions.LoadAuthorsSuccess(Authors)),
          catchError(error => of(new fromActions.LoadAuthorsFailure()))
        );
    })
  );
}