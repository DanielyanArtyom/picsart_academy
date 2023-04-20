const test_1 = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30],
];
const target_1 = 5;

const test_3 = [[1]];
const target_3 = 0;

const test_4 = [[1]];
const target_4 = 1;

const test_5 = [[1, 3]];
const target_5 = 3;

const test_6 = [[1, 1]];
const target_6 = 2;

const searchMatrix = function (matrix, target) {
  if (matrix.length === 1 && matrix[0].length === 1) {
    return matrix[0][0] === target;
  }

  let start = 0;
  let end = matrix[0].length - 1;

  while (start < matrix.length && end >= 0) {
    if (matrix[start][end] === target) {
      return true;
    }
    if (matrix[start][end] < target) {
      ++start;
    } else {
      --end;
    }
  }
  return false;
};
console.log(searchMatrix(test_6, target_6));
