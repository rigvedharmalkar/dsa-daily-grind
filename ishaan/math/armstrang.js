// Check if a number is Armstrong Number or not
// Problem Statement:Given an integer N, return true it is an Armstrong number otherwise return false.
// An Amrstrong number is a number that is equal to the sum of its own digits each raised to the power of the number of digits.

function armstrong(num) {
  let k = num.toString().length;
  let sum = 0;
  let n = num;

  while (n > 0) {
    ld = n % 10;
    sum += Math.pow(ld, k);
    n = Math.floor(n / 10);
  }
  return sum === num;
}

const num = 153;
console.log(armstrong(num));
