const test1 = [1, 1, 2, 3, 3, 4, 4, 8, 8];

const singleNonDuplicate = function (nums) {
  if (nums.length === 1) {
    return nums[0];
  }

  let start = 0;
  let mid = 0;
  let end = nums.length - 1;

  while (start <= end) {
    mid = Math.floor(start + (end - start) / 2);

    if (nums[mid] !== nums[mid - 1] && nums[mid] !== nums[mid + 1]) {
      return nums[mid];
    }
    if (
      (mid % 2 === 0 && nums[mid] === nums[mid + 1]) ||
      (mid % 2 === 1 && nums[mid] === nums[mid - 1])
    ) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
};

console.log(singleNonDuplicate(test1));
