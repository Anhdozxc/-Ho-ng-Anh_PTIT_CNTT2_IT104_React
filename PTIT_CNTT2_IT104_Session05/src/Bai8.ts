class Book {
  title: string;
  author: string;

  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }
}
// Class Library có đóng gói
class Library {
  private books: Book[];

  constructor() {
    this.books = [];
  }
  addBook(book: Book): void {
    this.books.push(book);
  }

  searchBookByTitle(keyword: string): void {
    const result = this.books.filter((book) =>
      book.title.toLowerCase().includes(keyword.toLowerCase())
    );

    if (result.length === 0) {
      console.log("Không tìm thấy sách nào.");
    } else {
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
