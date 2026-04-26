// Interface Book - defines structure of a book object

interface Book {
title: string;
author: string;
isbn: string;
publishedYear: number;
genre?: string; // optional property
}


// Class Library

class Library {

private books: Book[] = []; // private array to store books

// method to add a book
addBook(book: Book): void {
this.books.push(book);
}

// method to get book details by ISBN
getBookDetails(isbn: string): Book | undefined {

for (let book of this.books) {

if (book.isbn === isbn) {
return book;
}

}

return undefined;

}

// method to access books internally (used by child class)
protected getBooks(): Book[] {
return this.books;
}

}


// Class DigitalLibrary extends Library

class DigitalLibrary extends Library {

readonly website: string;

constructor(website: string) {
super();
this.website = website;
}

// method to list all book titles
listBooks(): string[] {

const titles: string[] = [];

for (let book of this.getBooks()) {
titles.push(book.title);
}

return titles;

}

}


// CREATE INSTANCE + TEST

const myLibrary = new DigitalLibrary("www.mylibrary.com");

// add books
myLibrary.addBook({
title: "Harry Potter",
author: "J.K. Rowling",
isbn: "111",
publishedYear: 1997,
genre: "Fantasy"
});

myLibrary.addBook({
title: "The Hobbit",
author: "J.R.R. Tolkien",
isbn: "222",
publishedYear: 1937
});

myLibrary.addBook({
title: "1984",
author: "George Orwell",
isbn: "333",
publishedYear: 1949,
genre: "Dystopian"
});


// get book details
console.log("Book Details:", myLibrary.getBookDetails("222"));


// list all book titles
console.log("All Books:", myLibrary.listBooks());


// show website (readonly property)
console.log("Library Website:", myLibrary.website);