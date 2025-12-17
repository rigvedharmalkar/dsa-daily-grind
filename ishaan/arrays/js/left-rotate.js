// Left Roatate Array by 1

const nums = [1, 2, 3, 4, 5];

function brute(arr) {
  let rotated = [];
  let j = arr[0];

  for (let i = 1; i < arr.length; i++) {
    rotated.push(arr[i]);
  }
  rotated.push(j);
  return rotated;
}

// Better space complexity since original array is modified
function optimal(arr) {
  const first = arr[0];

  for (let i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }

  arr[arr.length - 1] = first;
  return arr;
}

console.log(brute(nums));
console.log(optimal(nums));
