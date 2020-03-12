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
  id: number;
  errorMessage: any;
  existingBook: Book;

  constructor(private bookService: BookService, private formBuilder: FormBuilder, private avRoute: ActivatedRoute, private router: Router) {
    const idParam = 'id';
    this.actionType = 'Add';

    if (this.avRoute.snapshot.params[idParam]) {
      this.id = this.avRoute.snapshot.params[idParam];
    }

    this.form = this.formBuilder.group(
      {
        id: 0,
        name: ['', Validators.required],
        author: ['', Validators.required],
        year: ['', Validators.required]
      }
    );
  }

  ngOnInit() {

    if (this.id > 0) {
      this.actionType = 'Edit';
      this.bookService.getBook(this.id)
        .subscribe(data => {
          this.form.setValue(data);
        });
    }
  }

  save() {
    if (!this.form.valid) {
      return;
    }

    if (this.actionType === 'Add') {
      this.bookService.saveBook(this.form.value)
        .subscribe((data) => {
          this.router.navigate(['/']);
        });
    }

    if (this.actionType === 'Edit') {

      this.bookService.updateBook(this.id, this.form.value)
        .subscribe((data) => {
          this.router.navigate(['/']);
        });
    }
  }

  cancel() {
    this.router.navigate(['/']);
  }
}
