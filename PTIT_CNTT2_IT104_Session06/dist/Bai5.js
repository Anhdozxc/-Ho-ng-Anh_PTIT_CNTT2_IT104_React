"use strict";
//interface ChangeSpeed5
class Vehicle5 {
    constructor() {
        this.speed = 0; // ban đầu dừng
    }
    speedUp(amount) {
        this.speed += amount;
        console.log(`Tăng tốc: tốc độ hiện tại = ${this.speed} km/h`);
    }
    slowDown(amount) {
        this.speed -= amount;
        if (this.speed < 0) {
            this.speed = 0;
        }
        console.log(`Giảm tốc: tốc độ hiện tại = ${this.speed} km/h`);
    }
    stop() {
        this.speed = 0;
        console.log(`Dừng xe: tốc độ hiện tại = ${this.speed} km/h`);
    }
}
const vehicle5 = new Vehicle5();
vehicle5.speedUp(50);
vehicle5.slowDown(20);
vehicle5.stop();
