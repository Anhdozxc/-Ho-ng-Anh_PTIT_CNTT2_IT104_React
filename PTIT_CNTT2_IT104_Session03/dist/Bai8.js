"use strict";
function add(a, b) {
    const numA = Number(a);
    const numB = Number(b);
    if (isNaN(numA) || isNaN(numB)) {
        return "Invalid input";
    }
    return numA + numB;
}
function subtract(a, b) {
    const numA = Number(a);
    const numB = Number(b);
    if (isNaN(numA) || isNaN(numB)) {
        return "Invalid input";
    }
    return numA - numB;
}
function multiply(a, b) {
    const numA = Number(a);
    const numB = Number(b);
    if (isNaN(numA) || isNaN(numB)) {
        return "Invalid input";
    }
    return numA * numB;
}
function divide(a, b) {
    const numA = Number(a);
    const numB = Number(b);
    if (isNaN(numA) || isNaN(numB) || numB === 0) {
        return "Invalid input";
    }
    return numA / numB;
}
console.log(add("5", 18));
console.log(subtract(10, "3"));
console.log(multiply("4", "2"));
console.log(divide("81", 9));
console.log(add("abc", 1));
