const _inputArray = [-1, 0, 5, 10, 21, 32, 45, 78, 95];
const _key = 32;

const searchIteratively = (array, key) => {
  let start = 0;
  let end = array.length - 1;
  let mid = 0;
    
  while (start <= end) {
    mid = Math.floor(start + (end - start) / 2);
    if (key === array[mid]) {
      return mid;
    } else if (key < array[mid]) {
      end = mid - 1;
    } else if (key > array[mid]) {
      start = mid + 1;
    }
  }
  return -1;
};

const binarySearchRecursive = (array, key, start, end) => {
  const mid = Math.floor(start + (end - start) / 2);
  if (key === array[mid]) {
    return mid;
  } else if (key < array[mid]) {
    const _end = mid - 1;
    return binarySearchRecursive(array, key, start, _end);
  } else if (key > array[mid]) {
    const _start = mid + 1;
    return binarySearchRecursive(array, key, _start, end);
  } else {
    return -1;
  }
};

// console.log(searchIteratively(_inputArray, _key));

console.log(
  binarySearchRecursive(_inputArray, _key, 0, _inputArray.length - 1)
);
