const items1_1 = [
  [1, 1],
  [4, 5],
  [3, 8],
];
const items2_1 = [
  [3, 1],
  [1, 5],
];

const items1_2 = [
  [1, 1],
  [3, 2],
  [2, 3],
];
const items2_2 = [
  [2, 1],
  [3, 2],
  [1, 3],
];

const mergeSimilarItems = (items1, items2) => {
  let _table = {};
  for (let i = 0; i < items1.length; ++i) {
    _table[items1[i][0]] = items1[i][1];
  }

  for (let i = 0; i < items2.length; ++i) {
    if (_table[items2[i][0]] !== undefined) {
      _table[items2[i][0]] = _table[items2[i][0]] + items2[i][1];
    } else {
      _table[items2[i][0]] = items2[i][1];
    }
  }

  return Object.keys(_table).map((el) => [el, _table[el]]);
};

console.log(mergeSimilarItems(items1_1, items2_1));
