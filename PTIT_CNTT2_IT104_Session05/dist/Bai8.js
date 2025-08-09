"use strict";
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}
// Class Library có đóng gói
class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    searchBookByTitle(keyword) {
        const result = this.books.filter((book) => book.title.toLowerCase().includes(keyword.toLowerCase()));
        if (result.length === 0) {
            console.log("Không tìm thấy sách nào.");
        }
        else {
            console.log("Kết quả tìm kiếm:");
            result.forEach((book) => {
                console.log(`- ${book.title} (tác giả: ${book.author})`);
            });
        }
    }
}
const lib = new Library();
lib.addBook(new Book("Đắc Nhân Tâm", "Dale Carnegie"));
lib.addBook(new Book("Batman", "DC Comics"));
lib.addBook(new Book("React.js", "Facebook"));
lib.searchBookByTitle("Bat");
