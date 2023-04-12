const _test_1 = [2, 3, -1, 8, 4]; // 3
const _test_2 = [1, -1, 4]; // 2
const _test_3 = [2, 5]; // -12

const findMiddleIndex = function (nums) {
  for (let i = 1; i < nums.length; ++i) {
    nums[i] += nums[i - 1];
  }

  for (let i = 0; i < nums.length; ++i) {
    let firstNum = i === 0 ? 0 : nums[i - 1];
    let secondNum = nums[nums.length - 1] - nums[i];
    if (firstNum === secondNum) {
      return i;
    }
  }

  return -1;
};

console.log(findMiddleIndex(_test_1));
