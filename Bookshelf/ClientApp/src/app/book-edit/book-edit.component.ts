import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';
import {Book} from '../models/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  book: Book;
  editForm: FormGroup;
  id: number;

  constructor(private formBuilder: FormBuilder, private router: Router, private avRoute: ActivatedRoute, private bookService: BookService) {
    const idParam = 'id';
    if (this.avRoute.snapshot.params[idParam]) {
      this.id = this.avRoute.snapshot.params[idParam];
    }
  }

  ngOnInit() {

    if (!this.id) {
      alert('Invalid action.');
      this.router.navigate(['/']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: 0,
      name: ['', Validators.required],
      author: ['', Validators.required],
      year: ['', Validators.required]
    });
    this.bookService.getBook(this.id)
      .subscribe( data => {
        this.editForm.setValue(data);
      });
  }

  onSubmit() {
    this.bookService.updateBook(this.id, this.editForm.value)
      .subscribe((data) => {
        this.router.navigate(['/']);
  });

}

}
