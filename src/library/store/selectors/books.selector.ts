import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromBooks from '../reducers/books.reducer';

const getState = createSelector(
  fromFeature.getLibraryState,
  state => state.books
);

export const getBooksData = createSelector(
  getState,
  fromBooks.getBooksData
);

export const getBooksLoaded = createSelector(
  getState,
  fromBooks.getBooksLoaded
);