// Selection Sort

const array = [64, 25, 12, 22, 11];

function selectionSort(nums) {
  for (let i = 0; i < nums.length; i++) {
    // Assumption first index is min
    let minIdx = i;
    for (let j = i; j < nums.length; j++) {
      if (nums[j] < nums[minIdx]) {
        // Update if j is lower than min
        minIdx = j;
      }
    }

    let temp = nums[i];
    nums[i] = nums[minIdx];
    nums[minIdx] = temp;
  }

  return nums;
}

console.log(selectionSort(array));
