import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { booksReducer } from './state/books.reducer';
import { collectionReducer } from './state/collection.reducer';
import { ActionReducerMap, StoreModule } from '@ngrx/store';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookCollectionComponent } from './book-collection/book-collection.component';
import { environment } from 'src/environments/environment.prod';
import { AppState } from './model/app-state.model';

const appState: ActionReducerMap<AppState> = {
  books: booksReducer,
  collection: collectionReducer,
};

@NgModule({
  imports: [
    BrowserModule,
    StoreModule.forRoot(appState),
    HttpClientModule,
    StoreDevtoolsModule.instrument({
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
  ],
  declarations: [AppComponent, BookListComponent, BookCollectionComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
