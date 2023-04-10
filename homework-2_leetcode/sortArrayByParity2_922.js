const _test_1 = [4, 2, 5, 7];
const _test_2 = [2, 3];
const _test_3 = [2, 8, 5, 7, 4, 9];
const _test_4 = [2, 4, 8, 7, 5, 9];
const _test_5 = [7, 5, 9, 2, 4, 8];
const _test_6 = [3,4];

const sortArrayByParityII = function (nums) {
  const odd = [];
  const even = [];
  let oddIdx = 0;
  let evenIdx = 0;

  for (let i = 0; i < nums.length; ++i) {
    nums[i] % 2 === 0 ? even.push(nums[i]) : odd.push(nums[i]);
  }

  for (let i = 0; i < nums.length; ++i) {
    if (i % 2 === 0) {
      nums[i] = even[evenIdx];
      ++evenIdx;
    } else {
      nums[i] = odd[oddIdx];
      ++oddIdx;
    }
  }

  return nums;
};

const sortArrayByParityIIInPlace = function (nums) {
  let temp = 0;

  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] % 2 === 0 && i % 2 !== 0) {
      temp = nums[i];
      for (let j = i; j < nums.length; ++j) {
        if (nums[j] % 2 === 1 && j % 2 === 0) {
          nums[i] = nums[j];
          nums[j] = temp;
          break;
        }
      }
    } else if(nums[i] % 2 === 1 && i % 2 === 0) {
      temp = nums[i];
      for (let j = i; j < nums.length; ++j) {
        if (nums[j] % 2 === 0 && j % 2 === 1) {
          nums[i] = nums[j];
          nums[j] = temp;
          break;
        }
      }
    }
  }

  return nums
};
// sortArrayByParityIIInPlace(_test_4);
console.log(sortArrayByParityIIInPlace(_test_6));
