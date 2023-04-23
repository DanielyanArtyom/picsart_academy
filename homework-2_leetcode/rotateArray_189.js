const _test_1 = [1, 2, 3, 4, 5, 6, 7];
const _k_1 = 3;
const _test_2 = [-1, -100, 3, 99];
const _k_2 = 2;
const _test_3 = [-1, -100, 3, 99];
const _k_3 = 0;
const _test_4 = [15, 25, 30, -1, -5, 0, 4];
const _k_4 = 9;

const _test_5 = [-1, -2, -3, -4, 0, 1, 5, 2, 7, 8, 1, 25, 115, 20];
const _k_5 = 13;

const _test_6 = [1];
const _k_6 = 4;

const rotateFirstVariant = function (nums, k) {
  if (k === 0 || k === nums.length || nums.length === 1) {
    return nums;
  }

  k = k % nums.length;

  let rotatedPart = [];
  let restPart = [];

  for (let i = nums.length - 1; i >= 0; --i) {
    if (k > 0) {
      rotatedPart.unshift(nums[i]);
      --k;
    } else {
      restPart.push(nums[i]);
    }
  }

  return rotatedPart.concat(restPart);
};

//Time Limit Exceeded in leet code:(
const rotateSecondVariant = function (nums, k) {
  if (k === 0 || k === nums.length || nums.length === 1) {
    return nums;
  }
  k = k % nums.length;
  while (k > 0) {
    // let _temp = nums[nums.length - 1];
    // nums.pop();
    nums.unshift(nums.pop());
    --k;
  }

  return nums;
};

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

const rotateThirdVariant = function (nums, k) {
  if (k === 0 || k === nums.length || nums.length === 1) {
    return nums;
  }
  k = k % nums.length;

  reverseArray(nums, 0, nums.length - 1);
  reverseArray(nums, 0, k - 1);
  reverseArray(nums, k, nums.length - 1);

  return nums;
};

const rotateThirdFourd = function (nums, k) {
  if (k === 0 || k === nums.length || nums.length === 1) {
    return nums;
  }
  k = k % nums.length;
let arr = []
for(let i = 0; i < nums.length; ++i) {
  arr[(i+k) % n] = nums[i]
}

  return nums;
};

console.log(rotateThirdVariant(_test_1, _k_1));
