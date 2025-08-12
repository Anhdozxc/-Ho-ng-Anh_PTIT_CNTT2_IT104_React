"use strict";
class Circle4 {
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
}
class Rectangle4 {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
    calculatePerimeter() {
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
