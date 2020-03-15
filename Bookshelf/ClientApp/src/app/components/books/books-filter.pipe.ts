import { PipeTransform, Pipe } from '@angular/core';
import { Book } from 'src/app/models/book';

@Pipe({
    name: 'booksFilter'
})

export class BooksFilterPipe implements PipeTransform {
    transform(books: Book[], searchTerm: string): Book[] {
        if (!books || !searchTerm) {
            return books;
        }

        // return books.filter(book => book.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
        // || book.author.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);

        return books.filter(book => book.name.toLowerCase().includes(searchTerm) || book.author.toLowerCase().includes(searchTerm));
    }
}
