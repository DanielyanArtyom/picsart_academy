const test1 = [1, 2, 3, 4]; // 24,12,8,6
const test2 = [-1, 1, 0, -3, 3]; // [0,0,9,0,0]
const test3 = [2, 3, 5, 0]; // [0,0,0,30]
const test4 = [4, 3, 2, 1, 2]; // [12,16,24,48,24]

const productExceptSelf = function (nums) {
  let prefix = [];
  let postfix = [];
  let output = [];

  for (let i = 0; i < nums.length; ++i) {
    if (i === 0) {
      prefix[i] = nums[i];
    } else {
      prefix[i] = nums[i] * nums[i - 1];
    }
  }

  for (let i = nums.length - 1; i >= 0; --i) {
    if (i === nums.length - 1) {
      postfix[i] = nums[i];
    } else {
      postfix[i] = postfix[i + 1] * nums[i];
    }
  }

  for (let i = 0; i < nums.length; ++i) {
    if (i === 0) {
      output[i] = postfix[i];
    } else if (i === nums.length - 1) {
      output[i] = prefix[i - 1];
    } else {
      output[i] = prefix[i - 1] * postfix[i + 1];
    }
  }
  console.log("pre", prefix);
  console.log("post", postfix);
  return output;
};

console.log(productExceptSelf(test3));
