const _test_1 = [5, 7, 7, 8, 8, 10]; // 3,4
const _test_n_1 = 8;

const _test_2 = [5, 7, 7, 8, 8, 10]; // -1 -1
const _test_n_2 = 2;

const _test_3 = []; // -1 -1
const _test_n_3 = 7;

const _test_4 = [5,5,5,5,5,5,5,5,5]; // 0 8
const _test_n_4 = 5;

const _test_5 = [1,1,1,1,1,1,2,3,5,5,5,5,7,8,9,9,9,9]; // 12
const _test_n_5 = 7;

const searchElement = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let mid = 0;

  while (start <= end) {
    mid = Math.floor(start + (end - start) / 2);
    if (target > nums[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return start;
};

const searchRange = function (nums, target) {
  if (nums.length === 0) {
    return [-1, -1];
  }
  const firstIdx = searchElement(nums, target);
  if (nums[firstIdx] === target) {
    const secondIdx = searchElement(nums, ++target) - 1;
    return [firstIdx, secondIdx];
  }

  return [-1, -1];
};

console.log(searchRange(_test_5, _test_n_5));
