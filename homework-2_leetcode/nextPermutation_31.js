const test_1 = [1, 2, 3]; // 1,3,2
const test_2 = [3, 2, 1]; // 1,2,3,
const test_3 = [1, 1, 5]; // 1,5,1
const test_4 = [2, 4, 1, 7, 5, 0]; // 2,4,1,0,5,7

const reverseArray = (nums, start, end) => {
  let temp = 0;
  while (start < end) {
    temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;

    ++start;
    --end;
  }
  return nums;
};

var nextPermutation = function (nums) {
  let firstIdx = null;
  let secondIdx = null;
  let temp = null;

  for (let i = nums.length - 2; i >= 0; --i) {
    if (nums[i] < nums[i + 1]) {
      firstIdx = i;
      break;
    }
  }
  if (firstIdx === null) {
    nums.reverse();
  } else {
    for (let j = nums.length - 1; j > firstIdx; --j) {
      if (nums[j] > nums[firstIdx]) {
        secondIdx = j;
        break;
      }
    }

    temp = nums[firstIdx];
    nums[firstIdx] = nums[secondIdx];
    nums[secondIdx] = temp;

    reverseArray(nums, ++firstIdx, nums.length - 1);
  }

  console.log(nums);
};
nextPermutation(test_4);
