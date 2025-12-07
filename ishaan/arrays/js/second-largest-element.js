// Find Second Smallest and Second Largest Element in an array
const arr = [1, 2, 4, 7, 7, 5];

// Brute
function brute(arr) {
  const sorted = [...arr].sort((a, b) => a - b);

  return {
    arr: sorted,
    secondLargest: sorted[arr.length - 2],
    secondSmallest: sorted[1],
  };
}

// Better
function better(arr) {
  if (!Array.isArray(arr)) return "Please provide array input";

  let smallest = Infinity;
  let largest = -Infinity;
  let secondSmallest = Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    smallest = Math.min(smallest, arr[i]);
    largest = Math.max(largest, arr[i]);
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < secondSmallest && arr[i] !== smallest) {
      smallest = arr[i];
      secondSmallest = smallest;
    }

    if (arr[i] > secondLargest && arr[i] !== largest) {
      largest = arr[i];
      secondLargest = largest;
    }
  }

  return {
    array: arr,
    secondLargest: secondLargest,
    secondSmallest: secondSmallest,
  };
}

// Optimal
function optimal(arr) {
  if (!Array.isArray(arr)) return "Please provide array input";

  let smallest = Infinity;
  let secondSmallest = Infinity;
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    // Smallest
    if (val < smallest) {
      secondSmallest = smallest;
      smallest = val;
    } else if (val < secondSmallest && val !== smallest) {
      secondSmallest = val;
    }

    // Largest
    if (val > largest) {
      secondLargest = largest;
      largest = val;
    } else if (val > secondLargest && val !== largest) {
      secondLargest = val;
    }
  }

  return {
    array: arr,
    secondSmallest,
    secondLargest,
  };
}

console.log(brute(arr));
console.log(better(arr));
console.log(optimal(arr));
