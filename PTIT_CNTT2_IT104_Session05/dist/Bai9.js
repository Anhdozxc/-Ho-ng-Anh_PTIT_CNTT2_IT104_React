"use strict";
class Book_bai9 {
    constructor(id, title, author, year) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getId() {
        return this.id;
    }
    getInfo() {
        return `${this.id} - ${this.title} - ${this.author} - ${this.year}`;
    }
    setInfo(newTitle, newAuthor, newYear) {
        this.title = newTitle;
        this.author = newAuthor;
        this.year = newYear;
    }
}
class Library_bai9 {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    deleteBookById(id) {
        this.books = this.books.filter((b) => b.getId() !== id);
    }
    updateBookById(id, newTitle, newAuthor, newYear) {
        const book = this.books.find((b) => b.getId() === id);
        if (book) {
            book.setInfo(newTitle, newAuthor, newYear);
        }
    }
    showBooks() {
        this.books.forEach((b) => console.log(b.getInfo()));
    }
}
const b1 = new Book_bai9(1, "Đắc Nhân Tâm", "Dale Carnegie", 1936);
const b2 = new Book_bai9(2, "Nhà Giả Kim", "Paulo Coelho", 1988);
const b3 = new Book_bai9(3, "SH 125i", "Toyota", 2018);
const lib9 = new Library_bai9();
lib9.addBook(b1);
lib9.addBook(b2);
lib9.addBook(b3);
console.log("Trước khi sửa, xóa:");
lib9.showBooks();
lib9.updateBookById(2, "The Flash", "DC Comics", 2020);
lib9.deleteBookById(1);
console.log("Sau khi sửa, xóa:");
lib9.showBooks();
