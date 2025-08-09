class Student_bai2 {
  id: number;
  age: number;
  email: string;
  constructor(id: number, age: number, email: string) {
    this.id = id;
    this.age = age;
    this.email = email;
  }
  getInfo(): string {
    return `ID: ${this.id}, Tuổi: ${this.age}, Email: ${this.email}`;
  }
}

const students_bai2: Student_bai2[] = [];
const s1 = new Student_bai2(1, 20, "abc@gmail.com");
const s2 = new Student_bai2(2, 21, "vbn@gmail.com");
const s3 = new Student_bai2(3, 19, "ghj@gmail.com");

students_bai2.push(s1, s2, s3);
for (const student of students_bai2) {
  console.log(student.getInfo());
}
