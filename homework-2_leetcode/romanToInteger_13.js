const _test_1 = "III"
const _test_2 = "LVIII"
const _test_3 = "MCMXCIV"
const _test_4 = "XXXIII"
const _test_5 = "LVI"
const _test_6 = "LXIII"
const _test_7 = "LXXX"


const romanToInt = function (s) {
  const romanSymbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let _convertedNumber = 0;
  for (let i = 0; i < s.length; ++i) {
    const _currentSymbol = s[i];
    const _nextSymbol = s[i + 1];
    if (romanSymbols[_currentSymbol] < romanSymbols[_nextSymbol]) {
      _convertedNumber -= romanSymbols[_currentSymbol];
    } else {
      _convertedNumber += romanSymbols[_currentSymbol];
    }
  }
  return _convertedNumber;
};

console.log(romanToInt(_test_7));
