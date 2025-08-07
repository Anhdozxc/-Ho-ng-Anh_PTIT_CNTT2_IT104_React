"use strict";
function introduce(student) {
    console.log(`Tên tôi là ${student.name}, tôi ${student.age} tuổi và email của tôi là ${student.email}.`);
}
const student1 = {
    name: "Đỗ Hoàng Anh",
    age: 19,
    email: "dohoanganh@gmail.com",
};
introduce(student1);
