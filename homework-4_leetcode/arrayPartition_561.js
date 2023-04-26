const arrayPairSum = function (nums) {
  const sortedNums = nums.sort((a, b) => a - b);
  let val = 0;
  for (let i = 0; i < sortedNums.length; i += 2) {
    val += sortedNums[i];
  }

  return val;
};
