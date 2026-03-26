// Reverse Digits of A Number

// Problem Statement: Given an integer N return the reverse of the given number.
// Note: If a number has trailing zeros, then its reverse will not include them.
// For e.g , reverse of 10400 will be 401 instead of 00401.

function reverseDigits(n) {
  let rev = 0;

  while (n > 0) {
    // Get the last digit
    let lastDigit = n % 10;

    // Append in rev
    rev = rev * 10 + lastDigit;

    // Remove the last digit
    n = Math.floor(n / 10);
  }

  return rev;
}

console.log(reverseDigits(200));
