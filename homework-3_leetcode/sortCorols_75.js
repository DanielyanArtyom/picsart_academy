const test_1 = [1, 0, 2];
const test_3 = [2, 0, 1];
const test_2 = [2, 0, 2, 1, 1, 0];
const test_4 = []

const sortColors = function (nums) {
  let tmp = 0;
  let low = 0;
  let high = nums.length - 1;

  for (let i = 0; i <= high; ++i) {
    if (nums[i] === 0) {
      tmp = nums[i];
      nums[i] = nums[low];
      nums[low] = tmp;
      ++low;
    } else if (nums[i] === 2) {
      tmp = nums[i];
      nums[i] = nums[high];
      nums[high] = tmp;
      --high;
      --i;
    }
  }

  return nums;
};

console.log(sortColors(test_3));
