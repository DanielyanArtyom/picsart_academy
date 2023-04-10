const _test_1 = [1, 3, 5, 6]; // 2
const _test_n_1 = 5;

const _test_2 = [1, 3, 5, 6]; // 1
const _test_n_2 = 2;

const _test_3 = [1, 3, 5, 6]; // 4
const _test_n_3 = 7;

const searchInsert = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let mid = 0;

  while (start <= end) {
    mid = Math.floor(start + (end - start) / 2);
    if (target > nums[mid]) {
      start = mid + 1;
    } else  {
      end = mid - 1;
    }
  }
  return start;
};

console.log(searchInsert(_test_3, _test_n_3));
