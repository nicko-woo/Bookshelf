import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BookService } from '../services/book.service';
import { Book } from '../models/book';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private bookService: BookService) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: 0,
      name: ['', Validators.required],
      author: ['', Validators.required],
      year: ['', Validators.required]
    });
  }

  onSubmit() {
    this.bookService.saveBook(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['/']);
      });
  }

}
