import { Book } from '../../models/book.model';
import * as fromActions from '../actions/books.action';

export interface State {
  books: {
    data: Book[],
    loading: boolean,
    loaded: boolean,
    error: boolean
  };
}

export const initialState: State = {
  books: {
    data: [],
    loading: false,
    loaded: false,
    error: false
  }
};

export function reducer(state: State = initialState, action: fromActions.BooksActions): State {
  switch (action.type) {
    case fromActions.BooksActionTypes.LoadBooks: {
      return {
        ...state,
        books: {
          data: [],
          loading: true,
          loaded: false,
          error: false
        }
      };
    }
    case fromActions.BooksActionTypes.LoadBooksSuccess: {
      const books = action.payload;

      return {
        ...state,
        books: {
          data: books,
          loading: false,
          loaded: true,
          error: false
        }
      };
    }
    case fromActions.BooksActionTypes.LoadBooksSuccess: {
      return {
        ...state,
        books: {
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

export const getBooksData = (state: State) => state.books.data;
export const getBooksLoaded = (state: State) => state.books.loaded;
