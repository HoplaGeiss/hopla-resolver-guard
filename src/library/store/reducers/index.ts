import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromAuthors from './authors.reducer';
import * as fromBooks from './books.reducer';

export interface LibraryState {
  authors: fromAuthors.State;
  books: fromBooks.State;
}

export const reducers: ActionReducerMap<LibraryState> = {
  authors: fromAuthors.reducer,
  books: fromBooks.reducer
};

export const getLibraryState = createFeatureSelector<LibraryState>('library');











