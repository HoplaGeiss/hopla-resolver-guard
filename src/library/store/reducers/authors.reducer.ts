import { Author } from '../../models/author.model';
import * as fromActions from '../actions/authors.action';

export interface State {
  authors: {
    data: Author[],
    loading: boolean,
    loaded: boolean,
    error: boolean
  };
}

export const initialState: State = {
  authors: {
    data: [],
    loading: false,
    loaded: false,
    error: false
  }
};

export function reducer(state: State = initialState, action: fromActions.AuthorsActions): State {
  switch (action.type) {
    case fromActions.AuthorsActionTypes.LoadAuthors: {
      return {
        ...state,
        authors: {
          data: [],
          loading: true,
          loaded: false,
          error: false
        }
      };
    }
    case fromActions.AuthorsActionTypes.LoadAuthorsSuccess: {
      const authors = action.payload;

      return {
        ...state,
        authors: {
          data: authors,
          loading: false,
          loaded: true,
          error: false
        }
      };
    }
    case fromActions.AuthorsActionTypes.LoadAuthorsSuccess: {
      return {
        ...state,
        authors: {
          data: [],
          loading: false,
          loaded: true,
          error: true
        }
      };
    }

    default:
      return state;
  }
}

export const getAuthorsData = (state: State) => state.authors.data;
export const getAuthorsLoaded = (state: State) => state.authors.loaded;
