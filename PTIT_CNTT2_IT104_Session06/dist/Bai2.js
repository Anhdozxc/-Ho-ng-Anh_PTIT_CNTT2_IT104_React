"use strict";
class Job {
    constructor(type) {
        this.type = type;
    }
    printType() {
        console.log(`Loại công việc: ${this.type}`);
    }
}
class ParttimeJob extends Job {
    constructor(type, workingHour) {
        super(type);
        this.workingHour = workingHour;
    }
    calculateSalary() {
        return 30000 * this.workingHour;
    }
}
class FulltimeJob extends Job {
    constructor(type) {
        super(type);
    }
    calculateSalary() {
        return 10000000;
    }
}
const parttime = new ParttimeJob("Part-time", 60);
const fulltime = new FulltimeJob("Full-time");
parttime.printType();
console.log(`Lương: ${parttime.calculateSalary()} VND`);
fulltime.printType();
console.log(`Lương: ${fulltime.calculateSalary()} VND`);
