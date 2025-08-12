"use strict";
class Book8 {
    constructor(id, title, author, stock, status) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.stock = stock;
        this.status = status;
    }
}
class Member8 {
    constructor(id, name, contact, status) {
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.lendedBooks = [];
        this.status = status;
    }
}
class LendedBook8 {
    constructor(memberId, bookId, dueDate) {
        this.memberId = memberId;
        this.bookId = bookId;
        this.dueDate = dueDate;
    }
}
class Library8 {
    constructor() {
        this.books = [];
        this.members = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    showBooks() {
        console.log("Danh sách sách trong thư viện là:");
        this.books.forEach((b, i) => {
            console.log(`${i + 1}. ${b.title} - ${b.author} | SL: ${b.stock} | Trạng thái: ${b.status}`);
        });
    }
}
let lib8 = new Library8();
let book1_8 = new Book8(1, "Lập trình JS", "Nguyễn Văn A", 3, "Có sẵn");
let book2_8 = new Book8(2, "React ", "Trần Thị B", 5, "Có sẵn");
let book3_8 = new Book8(3, "OOP nâng cao", "Lê Văn C", 2, "Có sẵn");
lib8.addBook(book1_8);
lib8.addBook(book2_8);
lib8.addBook(book3_8);
lib8.showBooks();
