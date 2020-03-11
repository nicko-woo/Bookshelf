import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './book/book.component';
import { BookAddEditComponent } from './book-add-edit/book-add-edit.component';
import { BookService } from './services/book.service';
import { BookAddComponent} from './book-add/book-add.component';
import { BookEditComponent} from './book-edit/book-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookComponent,
    BookAddEditComponent,
    BookAddComponent,
    BookEditComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
