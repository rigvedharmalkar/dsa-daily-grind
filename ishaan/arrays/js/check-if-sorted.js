// Check if array is sorted
const arr = [1, 2, 4, 3, 4, 5];

// Brute force approach
function brute(array) {
  if (!Array.isArray(array)) return "Please provide array input";

  const sorted = [...arr].sort((a, b) => a - b);
  if (sorted === array) return true;

  return false;
}

function optimal(array) {
  if (!Array.isArray(array)) return "Please provide array input";

  for (let i = 1; i < array.length; i++) {
    if (arr[i] < arr[i - 1]) return false;
  }
  return true;
}

console.log(brute(arr));
console.log(optimal(arr));
