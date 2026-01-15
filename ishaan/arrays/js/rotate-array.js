const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 2;
const direction = "right";

// Right rotate
function rightRotate(nums) {
  let temp = nums.slice(-k);
  const result = [];

  for (let j = 0; j < temp.length; j++) {
    result.push(temp[j]);
  }

  for (let i = 0; i < nums.length - k; i++) {
    result.push(nums[i]);
  }

  return {
    count: result.length,
    result: result,
  };
}

// Left Rotate
function leftRotate(nums) {
  let temp = nums.slice(0, k);
  const result = [];

  for (let i = k; i < nums.length; i++) {
    result.push(nums[i]);
  }

  for (let j = 0; j < temp.length; j++) {
    result.push(temp[j]);
  }

  return {
    count: result.length,
    result: result,
  };
}

switch (direction) {
  case "right":
    console.log(rightRotate(nums));
    return rightRotate(nums);
  case "left":
    console.log(leftRotate(nums));
    return leftRotate(nums);
  default:
    return null;
}
