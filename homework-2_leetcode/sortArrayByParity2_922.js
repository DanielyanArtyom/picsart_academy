const _test_1 = [4, 2, 5, 7];
const _test_2 = [2, 3];
const _test_3 = [2, 8, 5, 7, 4, 9];
const _test_4 = [2, 4, 8, 7, 5, 9];
const _test_5 = [7, 5, 9, 2, 4, 8];

// const sortArrayByParityII = function (nums) {
//   for (let i = 0; i < nums.length; ++i) {
//     const temp = nums[i];
//     if (nums[i] % 2 === 0) {
//       if (i % 2 === 1) {
//         nums[i] = nums[i + 1];
//         nums[i + 1] = temp;
//       }
//     } else {
//       if (i % 2 === 0) {
//         nums[i] = nums[i + 1];
//         nums[i + 1] = temp;
//       }
//     }
//   }
//   return nums;
// };

const sortArrayByParityII = function (nums) {
    for (let i = 0; i < nums.length; ++i) {
        if(nums[i] % 2 === 0) {
            
        }
  }
  return nums;
};

console.log(sortArrayByParityII(_test_3));
