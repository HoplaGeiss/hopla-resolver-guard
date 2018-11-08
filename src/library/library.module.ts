import { AuthorsResolver } from './resolvers/authors.resolver';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { LibraryRouting } from './library.routing';
import { LibraryComponent } from './containers/library.component';
import { BooksGuard } from './guards/books.guard';
import { AuthorsService } from './services/authors.service';
import { BooksService } from './services/books.service';
import * as fromStore from './store';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    LibraryRouting,
    StoreModule.forFeature('library', fromStore.reducers),
    EffectsModule.forFeature(fromStore.effects),
  ],
  declarations: [
    LibraryComponent
  ],
  providers: [
    AuthorsService,
    BooksService,
    BooksGuard,
    AuthorsResolver
  ],
  exports: [
    LibraryComponent
  ]
})
export class LibraryModule { }