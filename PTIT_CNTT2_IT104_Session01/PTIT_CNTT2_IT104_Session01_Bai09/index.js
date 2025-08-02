function mergeSortedArrays(arr1, arr2) {
  const merged = [...arr1, ...arr2]; // Gộp mảng bằng Spread Operator
  merged.sort((a, b) => a - b); // tăng dần
  return merged;
}
const array1 = [1, 2, 3, 5, 9];
const array2 = [4, 6, 7, 8];

const result = mergeSortedArrays(array1, array2);
console.log(result);
