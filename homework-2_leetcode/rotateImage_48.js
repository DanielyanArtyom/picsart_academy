const test1 = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];

const test2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const rotate = function (matrix) {
  let tmp = null;

  for (let i = 0; i < matrix.length; ++i) {
    for (let j = i; j < matrix.length; ++j) {
      tmp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = tmp;
    }
  }

  for (let i = 0; i < matrix.length; ++i) {
    matrix[i] = matrix[i].reverse();
  }
  console.log(matrix);
};

rotate(test2);
