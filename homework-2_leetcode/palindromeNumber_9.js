const _test_1 = 121
const _test_2 = -121
const _test_3 = 204
const _test_4 = 501 
const _test_6 = 1654
const _test_7 = 1551
const _test_8 = -1551
const _test_5 = 2882


//with string Method
const isPalindromeString = function (x) {
  const strValOriginal = `${x}`;
  let strVal = "";

  for (let i = strValOriginal.length - 1; i >= 0; --i) {
    strVal += strValOriginal[i];
  }
  return strValOriginal === strVal;
};

// tried to solve without converting to string
let isPalindrome = function (x) {
  const _original = x;
  let _palindromeNumber = 0;

  if (x < 0 || x!== 0 && x % 10 === 0) {
    return false;
  }
  while (x > 0) {
    _palindromeNumber = (x % 10) + _palindromeNumber * 10;
    x = Math.floor(x / 10);
  }

  return _original === _palindromeNumber;
};

console.log(isPalindrome(_test_5));
