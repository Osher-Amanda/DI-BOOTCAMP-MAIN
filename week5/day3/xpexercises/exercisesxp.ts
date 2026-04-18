// ExerciseXP - Library System


// Interface Book (defines structure of a book)

interface Book {
title: string;
author: string;
isbn: string;
publishedYear: number;
genre?: string; // optional
}


// Class Library (main class)

class Library {

private books: Book[] = []; // private array

// add a new book
addBook(book: Book): void {
this.books.push(book);
}

// get book details by isbn
getBookDetails(isbn: string): Book | undefined {

for (let book of this.books) {

if (book.isbn === isbn) {
return book;
}

}

return undefined;

}

// protected getter so child class can access books
protected getBooks(): Book[] {
return this.books;
}

}


// Class DigitalLibrary (inherits from Library)

class DigitalLibrary extends Library {

readonly website: string;

constructor(website: string) {
super();
this.website = website;
}

// return all book titles
listBooks(): string[] {

const titles: string[] = [];

for (let book of this.getBooks()) {
titles.push(book.title);
}

return titles;

}

}


// TESTING THE SYSTEM

const digitalLibrary = new DigitalLibrary("www.library.com");

// adding books
digitalLibrary.addBook({
title: "Harry Potter",
author: "J.K. Rowling",
isbn: "101",
publishedYear: 1997,
genre: "Fantasy"
});

digitalLibrary.addBook({
title: "The Hobbit",
author: "J.R.R. Tolkien",
isbn: "102",
publishedYear: 1937
});

digitalLibrary.addBook({
title: "1984",
author: "George Orwell",
isbn: "103",
publishedYear: 1949,
genre: "Dystopian"
});


// get specific book
console.log("ExerciseXP - Book Details:", digitalLibrary.getBookDetails("102"));


// list all titles
console.log("ExerciseXP - All Books:", digitalLibrary.listBooks());


// show website
console.log("ExerciseXP - Website:", digitalLibrary.website);