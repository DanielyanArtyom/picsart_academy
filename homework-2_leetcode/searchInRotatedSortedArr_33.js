const _test_1 = [4, 5, 6, 7, 0, 1, 2]; // 4
const _test_n_1 = 0;

const _test_2 = [4, 5, 6, 7, 0, 1, 2]; // -1
const _test_n_2 = 3;

const _test_3 = [1]; // -1
const _test_n_3 = 0;


const _test_4 = [7,8,9,0,2,4,5]; // -1
const _test_n_4 = 7;

const binarySearch = (array, key) => {
  let start = 0;
  let end = array.length - 1;
  let mid = 0;

  while (start <= end) {
    mid = Math.floor(start + (end - start) / 2);
    if (key === array[mid]) {
      return mid;
    } else if (array[mid] >= array[start]) {
      if (key <= array[mid] && key >= array[start]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else if (key <= array[end] && key >= array[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
};

const search = function (nums, target) {
  if (nums.length === 1) {
    return nums[0] === target ? 0 : -1;
  }
 return binarySearch(nums,target)

};
console.log(search(_test_4, _test_n_4));
