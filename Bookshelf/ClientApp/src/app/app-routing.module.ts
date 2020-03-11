import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './book/book.component';
import { BookAddComponent} from './book-add/book-add.component';
import { BookEditComponent} from './book-edit/book-edit.component';


const routes: Routes = [
  { path: '', component: BooksComponent, pathMatch: 'full' },
  { path: 'book/:id', component: BookComponent },
  { path: 'add', component: BookAddComponent },
  { path: 'book/edit/:id', component: BookEditComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
