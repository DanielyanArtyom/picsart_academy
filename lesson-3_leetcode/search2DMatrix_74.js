const test_1 = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
const target_1 = 3;
const test_2 = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
const target_2 = 13;

const test_3 = [[1]];
const target_3 = 0;

const test_4 = [[1]];
const target_4 = 1;

const test_5 = [[1, 3]];
const target_5 = 3;

const test_6 = [[1, 1]];
const target_6 = 0;

const findRow = (array, key) => {
  let start = 0;
  let end = array.length - 1;
  let mid = 0;

  while (start <= end) {
    mid = Math.floor(start + (end - start) / 2);
    if (key === array[mid][0]) {
      return true;
    } else if (key < array[mid][0]) {
      end = mid - 1;
    } else if (key > array[mid][0]) {
      start = mid + 1;
    }
  }
  return start;
};

const findElement = (array, key) => {
  let start = 0;
  let end = array.length - 1;
  let mid = 0;
  while (start <= end) {
    mid = Math.floor(start + (end - start) / 2);
    if (key === array[mid]) {
      return true;
    } else if (key < array[mid]) {
      end = mid - 1;
    } else if (key > array[mid]) {
      start = mid + 1;
    }
  }
  return false;
};

const searchMatrix = function (matrix, target) {
  if (matrix.length === 1 && matrix[0].length === 1) {
    return matrix[0][0] === target;
  }
  let _row = findRow(matrix, target);

  if (_row === true) {
    return _row;
  }
  if (_row > 0) {
    _row = _row - 1;
  }
  return findElement(matrix[_row], target);
};
console.log(searchMatrix(test_6, target_6));
