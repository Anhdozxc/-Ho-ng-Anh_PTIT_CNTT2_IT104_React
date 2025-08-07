"use strict";
function handleUnionType(input) {
    if (typeof input === "string") {
        console.log(`${input.length} ký tự`);
    }
    else if (typeof input === "number") {
        // Chẵn lẻ
        if (input % 2 === 0) {
            console.log(`${input} Đây là số chẵn`);
        }
        else {
            console.log(`${input} Đây là số lẻ`);
        }
    }
}
handleUnionType("demo123");
handleUnionType(10);
handleUnionType(11);
