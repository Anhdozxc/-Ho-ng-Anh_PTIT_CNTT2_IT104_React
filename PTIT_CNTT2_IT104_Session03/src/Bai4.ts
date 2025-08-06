let strValue: string = "2";
let numValue: number = 2;

// So sánh lỏng (==)
console.log("strValue == numValue:", strValue == numValue); // true
// true vì JS/TS sẽ tự ép kiểu chuỗi "2" thành số 2 trước khi so sánh nên bằng nhau
// So sánh chặt (===)
console.log("strValue === numValue:", strValue === numValue);
// false vì kiểu dữ liệu khác nhau: "2" là string, 2 là number. không giống kiểu nên trả về false
