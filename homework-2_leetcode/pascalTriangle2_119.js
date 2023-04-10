const _test_1 = 3;
const _test_2 = 0;
const _test_3 = 1;

const generate = function (numRows) {
  const _generatedArray = [[1]];
  for (let i = 1; i < numRows; ++i) {
    let _current = [];
    let _previous = _generatedArray[i - 1];
    for (let j = 0; j <= i; ++j) {
      if (j - 1 < 0) {
        _current.push(1);
      } else if (j === i) {
        _current.push(1);
      } else {
        const _temp = _previous[j] + _previous[j - 1];
        _current.push(_temp);
      }
    }
    _generatedArray.push(_current);
  }
  return _generatedArray;
};

const getRow = (rowIndex) => {
  if (rowIndex === 0) {
    return [1];
  }
  if (rowIndex === 1) {
    return [1, 1];
  }

  const _generatedTriangle = generate(rowIndex + 1);
  return _generatedTriangle[rowIndex];
};

console.log(getRow(_test_3));
