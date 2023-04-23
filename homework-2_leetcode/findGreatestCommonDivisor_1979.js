const _test_1 = [2, 5, 6, 9, 10];
const _test_2 = [7, 5, 6, 8, 3];
const _test_3 = [3, 3];
const _test_4 = [57, 36, 71, 15, 32, 99, 8, 56, 98];
const _test_5 = [18, 19, 21, 49, 45, 63, 64, 62, 19];
const _test_6 = [11, 15, 16, 18, 20];
const _test_7 = [6,2];

const findGCD = function (nums) {
  let smallest = nums[0];
  let largest = nums[nums.length - 1];
  let divisor = 0;

  if (nums.length === 2 && smallest === largest) {
    return smallest;
  }

  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] < smallest) {
      smallest = nums[i];
    } else if (nums[i] > largest) {
      largest = nums[i];
    }
  }

  for (let i = 0; i <= smallest; ++i) {
    if (smallest % i === 0 && largest % i === 0) {
      divisor = i;
    }
  }

  return divisor;
};

//gcd with recuesion, only divisor

console.log(findGCD(_test_7));
