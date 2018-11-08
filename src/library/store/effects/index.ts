import { BooksEffects } from './books.effect';
import { AuthorsEffects } from './authors.effect';

export const effects = [ BooksEffects, AuthorsEffects ];

export * from './authors.effect';
export * from './books.effect';