import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BookService } from '../services/book.service';
import { Book } from '../models/book';

@Component({
  selector: 'app-book-add-edit',
  templateUrl: './book-add-edit.component.html',
  styleUrls: ['./book-add-edit.component.css']
})
export class BookAddEditComponent implements OnInit {
  form: FormGroup;
  actionType: string;
  formName: string;
  formYear: number;
  formAuthor: string;
  id: number;
  errorMessage: any;
  existingBook: Book;

  constructor(private bookService: BookService, private formBuilder: FormBuilder, private avRoute: ActivatedRoute, private router: Router) {
    const idParam = 'id';
    this.actionType = 'Add';
    this.formName = 'name';
    this.formAuthor = 'author';
    this.formYear = 1900;
    if (this.avRoute.snapshot.params[idParam]) {
      this.id = this.avRoute.snapshot.params[idParam];
    }

    this.form = this.formBuilder.group(
      {
        id: 0,
        name: ['', [Validators.required]],
        author: ['', [Validators.required]],
        year: ['', [Validators.required]]
      }
    );
  }

  ngOnInit() {

    if (this.id > 0) {
      this.actionType = 'Edit';
      this.bookService.getBook(this.id)
        .subscribe(data => (
          this.existingBook = data,
          this.form.controls[this.formName].setValue(data.name),
          this.form.controls[this.formAuthor].setValue(data.author),
          this.form.controls[this.formYear].setValue(data.year)
        ));
    }
  }

  save() {
    if (!this.form.valid) {
      return;
    }

    if (this.actionType === 'Add') {
      const book: Book = {
        name: this.form.get(this.formName).value,
        author: this.form.get(this.formAuthor).value,
        year: +this.form.get(this.formAuthor).value
      };

      this.bookService.saveBook(book)
        .subscribe((data) => {
          this.router.navigate(['/']);
        });
    }

    if (this.actionType === 'Edit') {
      const book: Book = {
        id: this.existingBook.id,
        year: +this.form.get(this.formAuthor).value,
        name: this.form.get(this.formName).value,
        author: this.form.get(this.formAuthor).value
      };
      this.bookService.updateBook(book.id, book)
        .subscribe((data) => {
          this.router.navigate(['/']);
        });
    }
  }

  cancel() {
    this.router.navigate(['/']);
  }

  get name() { return this.form.get(this.formName); }
  get author() { return this.form.get(this.formAuthor); }
}
