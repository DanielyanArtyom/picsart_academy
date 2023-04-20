const test_1 = [3, 2, 3];
const test_2 = [2, 2, 1, 1, 1, 2, 2];
const test_3 = [1, 1, 2, 2, 2, 2, 2, 4, 5];
const test_4 = [5, 2, 4, 5, 6, 7, 8, 11, 5, 2, 2, 5, 6, 6, 5, 7, 5];

const majorityElement = function (nums) {
  nums = nums.sort((a, b) => a - b);
  const majority = Math.floor(nums.length / 2);
  return nums[majority];
};

const majorityElement_2 = function (nums) {
  let _counter = 1;
  let _majorElement = nums[0];

  for (let i = 1; i < nums.length; ++i) {
    if (!_counter) {
      _majorElement = nums[i];
      ++_counter;
    } else if (_majorElement === nums[i]) {
      ++_counter;
    } else {
      --_counter;
    }
  }
  return _majorElement;
};

console.log(majorityElement(test_4));
