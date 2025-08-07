interface Student {
  name: string;
  age: number;
  email: string;
}
function introduce(student: Student): void {
  console.log(
    `Tên tôi là ${student.name}, tôi ${student.age} tuổi và email của tôi là ${student.email}.`
  );
}
const student1: Student = {
  name: "Đỗ Hoàng Anh",
  age: 19,
  email: "dohoanganh@gmail.com",
};
introduce(student1);
