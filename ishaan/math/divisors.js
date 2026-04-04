// Print all Divisors of a given Number
// Problem Statement: Given an integer N, return all divisors of N.
// A divisor of an integer N is a positive integer that divides N without leaving a remainder.
// In other words, if N is divisible by another integer without any remainder, then that integer is considered a divisor of N.

class Solution {
  getDivisors(num) {
    const result = [1];

    for (let i = 2; i <= num; i++) {
      if (num % i === 0) {
        result.push(i);
      }
    }

    return result;
  }
}

const sol = new Solution();
const num = 20;
const result = sol.getDivisors(num);

console.log("Divisors of", num, ":", result.join(" "));
