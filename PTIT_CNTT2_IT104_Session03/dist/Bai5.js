"use strict";
let firstName = "john";
let lastName = "doe";
//viết hoa chữ cái đầu
function vietHoaChuDau(word) {
    if (word.length === 0)
        return "";
    return word[0].toUpperCase() + word.slice(1);
}
firstName = vietHoaChuDau(firstName);
lastName = vietHoaChuDau(lastName);
let fullName = firstName + " " + lastName;
console.log("Full name:", fullName);
