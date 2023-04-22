const maxSubArray = (nums) => {
  let maximumOfelements = 0;
  let maximumOfSubElements = nums[0];

  if (nums.length === 1) {
    return nums[0];
  }

  for (let i = 0; i < nums.length; ++i) {
    maximumOfelements += nums[i];
    
    if (nums[i] > maximumOfelements) {
      maximumOfelements = nums[i];
    }
    if (maximumOfSubElements < maximumOfelements) {
      maximumOfSubElements = maximumOfelements;
    }
  }

  return maximumOfSubElements;
};

console.log(maxSubArray([-2, -1]));
