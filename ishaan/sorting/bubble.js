// Bubble Sort

const arr = [98, 64, 1, 76, 11];

function bubbleSort(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
      }
    }
  }
  return nums.length ? nums : -1;
}

console.log(bubbleSort(arr));
