const arr = [2, 5, 1, 3, 0];

// Brute force
function largestElementBrute(arr) {
  // Sort the array
  const sorted = [...arr].sort((a, b) => a - b);
  const n = arr?.length;

  // Return last index
  return sorted[n - 1];
}

// Optimal Approach
function largestElementOptimal(arr) {
  if (!Array.isArray(arr)) return "Please provide array input";

  let result = arr[0];

  // Two pointer algorithm
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > result) {
      result = arr[i];
    }
  }

  return result;
}

console.log(largestElementBrute(arr));
console.log(largestElementOptimal(arr));
