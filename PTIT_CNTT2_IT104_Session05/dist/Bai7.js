"use strict";
class Book_bai7 {
    constructor(id, title, author) {
        this.id = id;
        this.title = title;
        this.author = author;
    }
    getId() {
        return this.id;
    }
    updateInfo(newTitle, newAuthor) {
        this.title = newTitle;
        this.author = newAuthor;
    }
    getInfo() {
        return `ID: ${this.id}, Tên: ${this.title}, Tác giả: ${this.author}`;
    }
}
class Library_bai7 {
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
    updateBookById(id, newTitle, newAuthor) {
        const book = this.books.find((book) => book.getId() === id);
        if (book) {
            book.updateInfo(newTitle, newAuthor);
            console.log(` Đã cập nhật sách có ID ${id}`);
        }
        else {
            console.log(` Không tìm thấy sách có ID ${id}`);
        }
    }
}
const book1 = new Book_bai7(1, "Đắc Nhân Tâm", "Dale Carnegie");
const book2 = new Book_bai7(2, "Nhà Giả Kim", "Paulo Coelho");
const book3 = new Book_bai7(3, "Tuổi Trẻ Đáng Giá Bao Nhiêu", "Rosie Nguyễn");
const library = new Library_bai7();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
console.log("Trước khi sửa:");
library.showBooks();
library.updateBookById(2, "Nhà Giả Kim", "Paulo Coelho");
console.log("\nSau khi sửa:");
library.showBooks();
