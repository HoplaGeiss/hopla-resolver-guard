import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromCities from '../reducers/authors.reducer';

const getState = createSelector(
  fromFeature.getLibraryState,
  state => state.authors
);

export const getAuthorsData = createSelector(
  getState,
  fromCities.getAuthorsData
);

export const getAuthorsLoaded = createSelector(
  getState,
  fromCities.getAuthorsLoaded
);