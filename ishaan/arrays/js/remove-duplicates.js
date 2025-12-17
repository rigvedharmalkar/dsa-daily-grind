// Remove duplicates from an array
// Leetcode 26: Remove Duplicates from Sorted Array
const arr = [1, 1, 2, 2, 2, 3, 3];

function brute(arr) {
  if (!Array.isArray(arr)) return "Invalid input";

  // Create a set
  let uniqueSet = new Set();

  for (let num of arr) {
    if (!uniqueSet.has(num)) {
      uniqueSet.add(num);
    }
  }

  return {
    arr: arr,
    unique: uniqueSet,
  };
}

// Optimal Approach
function optimal(arr) {
  if (!Array.isArray(arr) && arr.length === 0) return "Invalid input";

  let j = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[j] !== arr[i]) {
      j++;
      arr[j] = arr[i];
    }
  }
  return j + 1;
}

console.log(brute(arr));
console.log(optimal(arr));
