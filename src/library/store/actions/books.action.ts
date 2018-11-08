import { Action } from '@ngrx/store';

export enum BooksActionTypes {
  LoadBooks = '[Books] Load Books',
  LoadBooksSuccess = '[Books] Load Books Success',
  LoadBooksFailure = '[Books] Load Books Failure',
}

export class LoadBooks implements Action {
  readonly type = BooksActionTypes.LoadBooks;
}

export class LoadBooksSuccess implements Action {
  readonly type = BooksActionTypes.LoadBooksSuccess;

  constructor(public payload: any) {}
}

export class LoadBooksFailure implements Action {
  readonly type = BooksActionTypes.LoadBooksFailure;
}

// action types
export type BooksActions =
  | LoadBooks
  | LoadBooksSuccess
  | LoadBooksFailure;