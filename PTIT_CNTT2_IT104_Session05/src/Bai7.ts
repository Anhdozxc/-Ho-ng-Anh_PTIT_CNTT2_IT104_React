class Book_bai7 {
  private id: number;
  private title: string;
  private author: string;
  constructor(id: number, title: string, author: string) {
    this.id = id;
    this.title = title;
    this.author = author;
  }
  getId(): number {
    return this.id;
  }
  updateInfo(newTitle: string, newAuthor: string): void {
    this.title = newTitle;
    this.author = newAuthor;
  }
  getInfo(): string {
    return `ID: ${this.id}, Tên: ${this.title}, Tác giả: ${this.author}`;
  }
}
class Library_bai7 {
  private books: Book_bai7[] = [];
  addBook(book: Book_bai7): void {
    this.books.push(book);
  }
  showBooks(): void {
    if (this.books.length === 0) {
      console.log("Thư viện chưa có sách nào.");
    } else {
      console.log("Danh sách sách trong thư viện:");
      this.books.forEach((book) => {
        console.log(book.getInfo());
      });
    }
  }
  updateBookById(id: number, newTitle: string, newAuthor: string): void {
    const book = this.books.find((book) => book.getId() === id);
    if (book) {
      book.updateInfo(newTitle, newAuthor);
      console.log(` Đã cập nhật sách có ID ${id}`);
    } else {
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
