import { Action } from '@ngrx/store';

export enum AuthorsActionTypes {
  LoadAuthors = '[Authors] Load Authors',
  LoadAuthorsSuccess = '[Authors] Load Authors Success',
  LoadAuthorsFailure = '[Authors] Load Authors Failure',
}

export class LoadAuthors implements Action {
  readonly type = AuthorsActionTypes.LoadAuthors;
}

export class LoadAuthorsSuccess implements Action {
  readonly type = AuthorsActionTypes.LoadAuthorsSuccess;

  constructor(public payload: any) {}
}

export class LoadAuthorsFailure implements Action {
  readonly type = AuthorsActionTypes.LoadAuthorsFailure;
}

// action types
export type AuthorsActions =
  | LoadAuthors
  | LoadAuthorsSuccess
  | LoadAuthorsFailure;