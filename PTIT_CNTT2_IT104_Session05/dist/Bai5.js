"use strict";
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getWidth() {
        return this.width;
    }
    getHeight() {
        return this.height;
    }
    setWidth(width) {
        this.width = width;
    }
    setHeight(height) {
        this.height = height;
    }
    // Tính dien tích
    getArea() {
        return this.width * this.height;
    }
    // chu vi
    getPerimeter() {
        return 2 * (this.width + this.height);
    }
}
const rect = new Rectangle(5, 10);
console.log("Chiều rộng:", rect.getWidth());
console.log("Chiều dài:", rect.getHeight());
console.log("Chu vi:", rect.getPerimeter());
console.log("Diện tích:", rect.getArea());
// Cập nhật lại kích thước
rect.setWidth(8);
rect.setHeight(12);
console.log("\n=== Cập Nhật Xong ===");
console.log("Chiều rộng:", rect.getWidth());
console.log("Chiều dài:", rect.getHeight());
console.log("Chu vi:", rect.getPerimeter());
console.log("Diện tích:", rect.getArea());
