// Reverse Words in a String
const str = "Messi is so much better than Ronaldo";

// In built functions with palindrome check
function reverseWords(s) {
  let isPalindrome = false;
  const result = s.toLowerCase().split(" ").reverse().join(" ");

  if (result === s.toLowerCase()) {
    isPalindrome = true;
  }

  return {
    reversed: result,
    isPalindrome: isPalindrome,
  };
}

console.log(reverseWords(str));
