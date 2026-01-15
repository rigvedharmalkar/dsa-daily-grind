const arr = [1, 2, 0, 3, 4, 0, 5, 0];
const n = arr.length;

function moveZeros(nums, n) {
  if (nums.length === 1) {
    return nums;
  }
  let j = -1;

  for (let i = 0; i < n; i++) {
    if (nums[i] === 0) {
      j = i;
      break;
    }
  }

  for (let i = j + 1; i < n; i++) {
    if (nums[i] !== 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      j++;
    }
  }
  return arr;
}

console.log(moveZeros(arr, n));
