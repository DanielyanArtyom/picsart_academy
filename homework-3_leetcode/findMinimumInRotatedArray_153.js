const test1 = [3, 4, 5, 1, 2];
const test2 = [4, 5, 6, 7, 0, 1, 2];

const test3 = [11, 13, 15, 17];

const binarySearch = (nums) => {
  let start = 0;
  let end = nums.length - 1;
  let mid = 0;

  if (nums[start] < nums[end]) {
    return nums[start];
  }

  while (start <= end) {
    mid = Math.floor(start + (end - start) / 2);

    if (nums[mid] > nums[mid + 1]) {
      return nums[mid + 1];
    }
    if (nums[mid - 1] > nums[mid]) {
      return nums[mid];
    }
    if (nums[start] < nums[mid]) {
      end = mid - 1;
      start = start + 1;
    } else {
      end = mid - 1;
    }
  }
  return nums[0];
};

const findMin = function (nums) {
  return binarySearch(nums);
};

console.log(findMin(test1));
