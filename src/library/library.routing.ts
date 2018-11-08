import { AuthorsResolver } from './resolvers/authors.resolver';
import { BooksGuard } from './guards/books.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LibraryComponent } from './containers/library.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [ BooksGuard ],
    resolve: { authors: AuthorsResolver },
    component: LibraryComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
})

export class LibraryRouting {}