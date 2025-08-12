/*
  - Method thường concrete method: Đã có phần code cụ thể, lớp con có thể dùng ngay hoặc ghi đè override nếu cần.
  - Abstract method: Chỉ khai báo tên và kiểu trả về, chưa có code thực thi, bắt buộc lớp con phải override.
  Khi dùng:
  - Abstract method: Khi muốn bắt buộc các lớp con phải tự định nghĩa hành vi cụ thể.
  - Method thường: Khi muốn có sẵn hành vi mặc định, lớp con có thể dùng luôn.
*/
abstract class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
  // Method thường: có sẵn code
  eat(): void {
    console.log(`${this.name} đang ăn...`);
  }
  // abstract method không có code, bắt buộc lớp con phải viết
  abstract makeSound(): void;
}

class Dog extends Animal {
  makeSound(): void {
    console.log(`${this.name} sủa: Gâu gâu!`);
  }
}

class Cat extends Animal {
  makeSound(): void {
    console.log(`${this.name} kêu: Meo meo!`);
  }
}

const dog = new Dog("Cún");
dog.eat(); // dùng method thường từ class cha
dog.makeSound(); // method abstract đã được implement ở lớp con

const cat = new Cat("Miu");
cat.eat();
cat.makeSound();
