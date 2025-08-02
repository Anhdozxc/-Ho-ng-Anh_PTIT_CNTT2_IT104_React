const a = 5;
const arr = [1, 2, 3];
// a = 10; // Lỗi vì const không cho gán lại biến
arr.push(4); // Hợp lệ vì chỉ thay đổi giá trị bên trong mảng
console.log(a);
console.log(arr);
