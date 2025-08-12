// Interface định nghĩa các phương thức chung
interface Geometry4 {
  calculateArea(): number;
  calculatePerimeter(): number;
}
class Circle4 implements Geometry4 {
  private radius: number;
  constructor(radius: number) {
    this.radius = radius;
  }
  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
  calculatePerimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}
class Rectangle4 implements Geometry4 {
  private width: number;
  private height: number;
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
  calculateArea(): number {
    return this.width * this.height;
  }
  calculatePerimeter(): number {
    return 2 * (this.width + this.height);
  }
}

const circle4 = new Circle4(5);
console.log("Hình tròn:");
console.log("Diện tích:", circle4.calculateArea());
console.log("Chu vi:", circle4.calculatePerimeter());

const rectangle4 = new Rectangle4(4, 6);
console.log("\nHình chữ nhật:");
console.log("Diện tích:", rectangle4.calculateArea());
console.log("Chu vi:", rectangle4.calculatePerimeter());
