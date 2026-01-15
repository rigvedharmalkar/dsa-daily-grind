const arr = [1, 2, 0, 3, 4, 0, 5, 0];
const n = arr.length;

function moveZeros(nums, n) {
  if (arr.length === 1) {
    return arr;
  }
  let j = -1;

  for (let i = 0; i < n; i++) {
    if (arr[i] === 0) {
      j = i;
      break;
    }
  }

  for (let i = j + 1; i < n; i++) {
    if (arr[i] !== 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      j++;
    }
  }
  return arr;
}

console.log(moveZeros(nums, n));
