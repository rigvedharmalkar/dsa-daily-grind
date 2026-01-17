// Find the union array
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr2 = [2, 3, 4, 4, 5, 11, 12];

let union = new Set([...arr1, ...arr2]);

const result = Array.from(union).sort((a, b) => a - b);
console.log(result);
