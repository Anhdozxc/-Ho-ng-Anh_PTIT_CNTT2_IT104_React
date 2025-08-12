class Student6 {
  private id: number;
  name: string;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
  getId() {
    return this.id;
  }
}
let students6: Student6[] = [
  new Student6(1, "An"),
  new Student6(2, "Binh"),
  new Student6(3, "Chi"),
  new Student6(4, "Dung"),
  new Student6(5, "Ha"),
  new Student6(6, "Khanh"),
];
class Classroom6 {
  students: Student6[];
  constructor(arr: Student6[]) {
    this.students = arr;
  }
  showStudents() {
    for (let i = 0; i < this.students.length; i++) {
      console.log(`${i + 1}. ${this.students[i].name}`);
    }
  }
  addStudent(s: Student6) {
    this.students.push(s);
  }
  filterStudent(id: number) {
    let found: Student6[] = [];
    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i].getId() === id) {
        found.push(this.students[i]);
      }
    }
    for (let i = 0; i < found.length; i++) {
      console.log(found[i].name);
    }
  }
  addStudentInClass(pool: Student6[], count: number) {
    for (let i = 0; i < count && pool.length > 0; i++) {
      const s = pool.shift();
      if (s) this.students.push(s);
    }
  }
}
const class1_6 = new Classroom6([]);
const class2_6 = new Classroom6([]);
class1_6.addStudentInClass(students6, 3);
class1_6.showStudents();
class1_6.filterStudent(2);
class2_6.addStudentInClass(students6, 3);
class2_6.showStudents();
