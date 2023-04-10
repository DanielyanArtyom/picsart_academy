const _test_1 = [1, 1, 2]; // [1,2,_]
const _test_2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];


// my implementation
// const removeDuplicates = function (nums) {
//     const _cachedValues = {};
//     const expectedNums = [];

//     let idx = 0;
//     for (let i = 0; i < nums.length; ++i) {
//       const key = nums[i];
//       if (_cachedValues[key] === undefined) {
//         _cachedValues[key] = idx++;
//       }
//     }
//     for (const [key, value] of Object.entries(_cachedValues)) {
//       expectedNums[value] = Number(key);
//     }
//     return expectedNums;
// };

// I don't know why, leecode expected this one (
const removeDuplicates = function (nums) {
    let idx = 0;
    for (let i = 0; i < nums.length; ++i) {
      if (nums[i] !== nums[i - 1]) {
        nums[idx] = nums[i];
        idx += 1;
      }
    }
    return idx;
};

console.log(removeDuplicates(_test_1));
