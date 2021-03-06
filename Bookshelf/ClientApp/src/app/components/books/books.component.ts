import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html'
})
export class BooksComponent implements OnInit {
  books$: Observable<Book[]>;
  searchTerm: string;

  constructor(private router: Router, private bookService: BookService) {
  }

  ngOnInit() {
    this.loadBooks();
  }

  loadBooks() {
    this.books$ = this.bookService.findAll();
  }

  delete(id) {
    const ans = confirm('Do you want to delete book with id: ' + id);
    if (ans) {
      this.bookService.delete(id).subscribe((data) => {
        this.loadBooks();
      });
    }
  }

}
