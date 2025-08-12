abstract class Shape {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  getName(): string {
    return this.name;
  }
  abstract getSize(): string;
}
class Rectangle extends Shape {
  width: number;
  height: number;
  constructor(name: string, width: number, height: number) {
    super(name);
    this.width = width;
    this.height = height;
  }
  getSize(): string {
    return `Chiều rộng: ${this.width}, Chiều cao: ${this.height}`;
  }
}
const myRectangle = new Rectangle("Hình chữ nhật", 250, 150);
console.log(myRectangle.getName());
console.log(myRectangle.getSize());
