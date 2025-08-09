"use strict";
// Private
class Book_bai6 {
    constructor(id, title, author) {
        this.id = id;
        this.title = title;
        this.author = author;
    }
    // getter truy cập ngoài class
    getInfo() {
        return `ID: ${this.id}, Tên: ${this.title}, Tác giả: ${this.author}`;
    }
}
class Library_bai6 {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    showBooks() {
        if (this.books.length === 0) {
            console.log("Thư viện chưa có sách nào.");
        }
        else {
            console.log("Danh sách sách trong thư viện:");
            this.books.forEach((book) => {
                console.log(book.getInfo());
            });
        }
    }
}
const book1_bai6 = new Book_bai6(1, "Đắc Nhân Tâm", "Dale Carnegie");
const book2_bai6 = new Book_bai6(2, "Nhà Giả Kim", "Paulo Coelho");
const book3_bai6 = new Book_bai6(3, "The Flash", "DC Comics");
const book4_bai6 = new Book_bai6(4, "1984", "George Orwell");
const book5_bai6 = new Book_bai6(5, "Clean Code", "Robert C. Martin");
const library_bai6 = new Library_bai6();
library_bai6.addBook(book1_bai6);
library_bai6.addBook(book2_bai6);
library_bai6.addBook(book3_bai6);
library_bai6.addBook(book4_bai6);
library_bai6.addBook(book5_bai6);
library_bai6.showBooks();
