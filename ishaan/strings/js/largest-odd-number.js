// Largest Odd Number in a String
const s = "0002014638";
let idx = 0;

function largestOddNumber(s) {
  for (let i = 0; i < s.length; i++) {
    if (s[i] % 2 == 1) {
      idx = i;
    }
  }

  // Remove zeros
  let i = 0;
  while (i <= idx && s[i] === "0") i++;

  return s.substring(i, idx + 1);
}

console.log(largestOddNumber(s));
