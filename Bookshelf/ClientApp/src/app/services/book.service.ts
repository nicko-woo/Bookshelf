import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../models/book';
import { CrudService } from './crud.service';

@Injectable()
export class BookService extends CrudService<Book, number> {

  constructor(protected _http: HttpClient) {
    super(_http, 'https://localhost:44356/books');
  }

}


// import { Injectable } from '@angular/core';
// import { Component, Inject } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { retry, catchError } from 'rxjs/operators';
// import { Book } from '../models/book';

// @Injectable({
//   providedIn: 'root'
// })
// export class BookService {

//   myAppUrl: string;
//   myApiUrl: string;
//   httpOptions = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json; charset=utf-8'
//     })
//   };
//   constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
//       this.myAppUrl = baseUrl;
//       this.myApiUrl = 'books/';
//   }

//   getBooks(): Observable<Book[]> {
//     return this.http.get<Book[]>(this.myAppUrl + this.myApiUrl)
//     .pipe(
//       retry(1),
//       catchError(this.errorHandler)
//     );
//   }

//   getBook(id: number): Observable<Book> {
//       return this.http.get<Book>(this.myAppUrl + this.myApiUrl + id)
//       .pipe(
//         retry(1),
//         catchError(this.errorHandler)
//       );
//   }

//   saveBook(book): Observable<Book> {
//       return this.http.post<Book>(this.myAppUrl + this.myApiUrl, JSON.stringify(book), this.httpOptions)
//       .pipe(
//         retry(1),
//         catchError(this.errorHandler)
//       );
//   }

//   updateBook(id: number, book): Observable<Book> {
//       return this.http.put<Book>(this.myAppUrl + this.myApiUrl + id, JSON.stringify(book), this.httpOptions)
//       .pipe(
//         retry(1),
//         catchError(this.errorHandler)
//       );
//   }

//   deleteBook(id: number): Observable<Book> {
//       return this.http.delete<Book>(this.myAppUrl + this.myApiUrl + id)
//       .pipe(
//         retry(1),
//         catchError(this.errorHandler)
//       );
//   }

//   errorHandler(error) {
//     let errorMessage = '';
//     if (error.error instanceof ErrorEvent) {
//       // Get client-side error
//       errorMessage = error.error.message;
//     } else {
//       // Get server-side error
//       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
//     }
//     console.log(errorMessage);
//     return throwError(errorMessage);
//   }
// }
