import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { BooksComponent } from './components/books/books.component';
import { BookComponent } from './components/books/book/book.component';
import { BookAddEditComponent} from './components/books/book-add-edit/book-add-edit.component';
import { GenresComponent } from './components/genres/genres.component';


const routes: Routes = [
  { path: '', component: BooksComponent, pathMatch: 'full' },
  { path: 'genres', component: GenresComponent, pathMatch: 'full'},
  { path: 'book/:id', component: BookComponent },
  { path: 'add', component: BookAddEditComponent },
  { path: 'book/edit/:id', component: BookAddEditComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
