const _test_1 = 5;
const _test_2 = 7;
const _test_3 = 9;

const generate = function (numRows) {
  const _generatedArray = [[1]];

  if (numRows === 1) {
    return _generatedArray;
  }

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
console.log(generate(_test_2));
