const _test_1 = [2, 5, 1, 3, 4, 7];
const _test_n_1 = 3;
const _test_2 = [1, 2, 3, 4, 4, 3, 2, 1];
const _test_n_2 = 4;

const _test_3 = [1, 1, 2, 2];
const _test_n_3 = 2;

const _test_4 = [1,3,5,7,9,2,4,6,8,10];
const _test_n_4 = 5;


const shuffle = function (nums, n) {
  let _shuffledArray = [];
  let secondPart = n ;

  for (let i = 0; i < n; ++i) {
    _shuffledArray.push(nums[i]);
    _shuffledArray.push(nums[secondPart]);
    ++secondPart;
  }

  return _shuffledArray;
};
console.log(shuffle(_test_4, _test_n_4));
