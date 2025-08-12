"use strict";
class Shape {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class Rectangle extends Shape {
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }
    getSize() {
        return `Chiều rộng: ${this.width}, Chiều cao: ${this.height}`;
    }
}
const myRectangle = new Rectangle("Hình chữ nhật", 250, 150);
console.log(myRectangle.getName());
console.log(myRectangle.getSize());
