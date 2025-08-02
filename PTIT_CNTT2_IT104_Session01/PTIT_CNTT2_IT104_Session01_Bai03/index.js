const students = [
  { id: 1, name: "Nguyễn A" },
  { id: 2, name: "Nguyễn B" },
  { id: 3, name: "Đỗ C" },
];

students.forEach((student) => {
  console.log(`Xin chào ${student.name}! Mã số: ${student.id}.`);
});
