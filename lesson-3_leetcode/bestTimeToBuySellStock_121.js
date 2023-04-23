const _test_1 = [7, 1, 5, 3, 6, 4];
const _test_2 = [1, 2, 0];

const maxProfit = function (prices) {
  let currentMax = 0;
  let idx = 0;
  let i = 0;

  while (i < prices.length) {
    if (prices[i] < prices[idx]) {
      idx = i;
    }
    const temp = prices[i] - prices[idx];
    currentMax = currentMax < temp ? temp : currentMax;
    ++i;
  }

  return currentMax;
};

console.log(maxProfit(_test_2));
