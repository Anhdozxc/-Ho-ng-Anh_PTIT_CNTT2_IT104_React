"use strict";
let input = "banana";
let result_bai7 = "";
// Duyệt
for (let i = 0; i < input.length; i++) {
    let char = input[i];
    if (!result_bai7.includes(char)) {
        //thêm vào kết quả nếu chưa có
        result_bai7 += char;
    }
}
console.log(input);
console.log(result_bai7);
