// ExerciseXP - Library System
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Class Library (main class)
var Library = /** @class */ (function () {
    function Library() {
        this.books = []; // private array
    }
    // add a new book
    Library.prototype.addBook = function (book) {
        this.books.push(book);
    };
    // get book details by isbn
    Library.prototype.getBookDetails = function (isbn) {
        for (var _i = 0, _a = this.books; _i < _a.length; _i++) {
            var book = _a[_i];
            if (book.isbn === isbn) {
                return book;
            }
        }
        return undefined;
    };
    // protected getter so child class can access books
    Library.prototype.getBooks = function () {
        return this.books;
    };
    return Library;
}());
// Class DigitalLibrary (inherits from Library)
var DigitalLibrary = /** @class */ (function (_super) {
    __extends(DigitalLibrary, _super);
    function DigitalLibrary(website) {
        var _this = _super.call(this) || this;
        _this.website = website;
        return _this;
    }
    // return all book titles
    DigitalLibrary.prototype.listBooks = function () {
        var titles = [];
        for (var _i = 0, _a = this.getBooks(); _i < _a.length; _i++) {
            var book = _a[_i];
            titles.push(book.title);
        }
        return titles;
    };
    return DigitalLibrary;
}(Library));
// TESTING THE SYSTEM
var digitalLibrary = new DigitalLibrary("www.library.com");
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
