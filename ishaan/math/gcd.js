// Find GCD of two numbers
// Problem Statement: Given two integers N1 and N2, find their greatest common divisor.

let num1 = 15;
let num2 = 20;
let gcd = 1;

const range = Math.min(num1, num2);

for (let i = 1; i < range; i++) {
  if (num1 % i === 0 && num2 % i === 0) {
    gcd = i;
  }
}

console.log(gcd);
