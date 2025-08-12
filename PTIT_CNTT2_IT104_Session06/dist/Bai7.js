"use strict";
class Student7 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getId() {
        return this.id;
    }
}
let students7 = [
    new Student7(1, "An"),
    new Student7(2, "Binh"),
    new Student7(3, "Chi"),
    new Student7(4, "Dung"),
    new Student7(5, "Ha"),
    new Student7(6, "Khanh"),
];
class Classroom7 {
    constructor() {
        this.students = [];
    }
    showStudents() {
        this.students.forEach((s, i) => {
            console.log(`${i + 1}. ${s.name}`);
        });
    }
    addStudent(s) {
        this.students.push(s);
    }
    addStudentInClass(pool, count) {
        for (let i = 0; i < count && pool.length > 0; i++) {
            const s = pool.shift();
            if (s)
                this.students.push(s);
        }
    }
    filterStudent(id) {
        let found = this.students.filter((s) => s.getId() === id);
        found.forEach((s) => console.log(s.name));
    }
    // xóa học sinh khỏi lớp và đưa về mảng tất cả học sinh
    removeStudent(id, pool) {
        for (let i = 0; i < this.students.length; i++) {
            if (this.students[i].getId() === id) {
                pool.push(this.students[i]);
                this.students.splice(i, 1);
                break;
            }
        }
    }
    // Sửa
    editStudent(id, newName) {
        for (let s of this.students) {
            if (s.getId() === id) {
                s.name = newName;
                break;
            }
        }
    }
}
let class1_7 = new Classroom7();
class1_7.addStudentInClass(students7, 3);
console.log("Lớp 1 ban đầu:");
class1_7.showStudents();
// xóa học sinh id=2 khỏi lớp 1 và đưa lại vào mảng tất cả
class1_7.removeStudent(2, students7);
console.log("\nLớp 1 sau khi xóa học sinh id=2:");
class1_7.showStudents();
console.log("\nMảng tất cả học sinh sau khi nhận lại:");
students7.forEach((s) => console.log(s.name));
// Sửa thông tin học sinh id=1 trong lớp 1
class1_7.editStudent(1, "An Đây");
console.log("\nLớp 1 sau khi sửa tên học sinh id=1:");
class1_7.showStudents();
