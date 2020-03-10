import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { BookService } from '../services/book.service';
import { Book } from '../models/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  book$: Observable<Book>;
  id: number;

  constructor(private bookService: BookService, private avRoute: ActivatedRoute) {
    const idParam = 'id';
    if (this.avRoute.snapshot.params[idParam]) {
      this.id = this.avRoute.snapshot.params[idParam];
    }
  }

  ngOnInit() {
    this.loadBook();
  }

  loadBook() {
    this.book$ = this.bookService.getBook(this.id);
  }
}
