// spread operator
let numbers = [1, 2, 3, 4];
function printNumbers(a, b, c) {
  console.log(a, b, c);
}
printNumbers(...numbers);

let numbersClone = [...numbers];
numbersClone[0] = 7;

// rest operator
function count(numbers) {
  console.log(numbers);
}
count(1, 2, 3, 4, 5, 6, 7, 8, 9);
