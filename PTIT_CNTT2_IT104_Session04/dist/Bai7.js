"use strict";
function processInput_bai7(input) {
    if (typeof input === "string") {
        //nếu chuỗi chỉ chứa toàn số
        if (/^\d+$/.test(input)) {
            const num = Number(input);
            console.log(num * num);
        }
        else {
            //dếm số kýtự chữ cái (a-z, A-Z)
            const matches = input.match(/[a-zA-Z]/g);
            const letterCount = matches ? matches.length : 0;
            console.log(`${letterCount} ký tự chữ cái`);
        }
    }
    else if (typeof input === "number") {
        // Kiểm tra số nguyên tố
        let isPrime = true;
        if (input < 2) {
            isPrime = false;
        }
        else {
            for (let i = 2; i < input; i++) {
                if (input % i === 0) {
                    isPrime = false;
                    break;
                }
            }
        }
        // in kết quả
        if (isPrime) {
            console.log("Là số nguyên tố");
        }
        else {
            console.log("Không phải số nguyên tố");
        }
    }
    else if (typeof input === "boolean") {
        // xử lí boolean
        if (input) {
            console.log("Giá trị là true - tiến hành xử lý");
        }
        else {
            console.log("Giá trị là false - dừng xử lý");
        }
    }
}
processInput_bai7("123");
processInput_bai7("abc123!");
processInput_bai7(11);
processInput_bai7(9);
processInput_bai7(true);
processInput_bai7(false);
