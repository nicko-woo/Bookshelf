import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { BooksComponent } from './components/books/books.component';
import { BookComponent } from './components/books/book/book.component';
import { BookAddEditComponent } from './components/books/book-add-edit/book-add-edit.component';
import { GenresComponent } from './components/genres/genres.component';
import { BookService } from './services/book.service';
import { BooksFilterPipe } from './components/books/books-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    BooksComponent,
    BookComponent,
    BookAddEditComponent,
    GenresComponent,
    BooksFilterPipe
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
