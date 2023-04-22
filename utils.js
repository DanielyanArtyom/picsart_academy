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


