import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './book/book.component';
import { BookAddEditComponent } from './book-add-edit/book-add-edit.component';
import { GenresComponent } from './genres/genres.component';
import { BookService } from './services/book.service';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookComponent,
    BookAddEditComponent,
    GenresComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
