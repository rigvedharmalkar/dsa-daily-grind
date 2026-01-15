// Rotate array based on direction and k elements
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

function rotateArray(direction, nums) {
  switch (direction) {
    case "right":
      return rightRotate(nums);
    case "left":
      return leftRotate(nums);
    default:
      return {
        message: "Please provide correct direction",
      };
  }
}

console.log(rotateArray(direction, nums));
