import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './book/book.component';
import { BookAddEditComponent } from './book-add-edit/book-add-edit.component';

const routes: Routes = [
  { path: '', component: BookComponent, pathMatch: 'full' },
  { path: 'book/:id', component: BookComponent },
  { path: 'add', component: BookAddEditComponent },
  { path: 'book/edit/:id', component: BookAddEditComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
