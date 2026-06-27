// Interface Book - defines structure of a book object
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
// Class Library
var Library = /** @class */ (function () {
    function Library() {
        this.books = []; // private array to store books
    }
    // method to add a book
    Library.prototype.addBook = function (book) {
        this.books.push(book);
    };
    // method to get book details by ISBN
    Library.prototype.getBookDetails = function (isbn) {
        for (var _i = 0, _a = this.books; _i < _a.length; _i++) {
            var book = _a[_i];
            if (book.isbn === isbn) {
                return book;
            }
        }
        return undefined;
    };
    // method to access books internally (used by child class)
    Library.prototype.getBooks = function () {
        return this.books;
    };
    return Library;
}());
// Class DigitalLibrary extends Library
var DigitalLibrary = /** @class */ (function (_super) {
    __extends(DigitalLibrary, _super);
    function DigitalLibrary(website) {
        var _this = _super.call(this) || this;
        _this.website = website;
        return _this;
    }
    // method to list all book titles
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
// CREATE INSTANCE + TEST
var myLibrary = new DigitalLibrary("www.mylibrary.com");
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
