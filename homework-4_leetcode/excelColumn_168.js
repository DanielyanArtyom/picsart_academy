const test1 = 1;
const test2 = 28;
const test3 = 701;
const test4 = 703;
const test5 = 1431;
const test6 = 3304;

// const convertToTitle = function (columnNumber) {
//   if (columnNumber.length === 0) {
//     return 0;
//   }
//   const columns = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//   let sum = 0;
//   const length = columnNumber.length;

//   for (let i = 0; i < length; ++i) {
//     const multiplier = length - i - 1;
//     const foundElementVolume = columns.indexOf(columnNumber[i]) + 1;
//     if (multiplier === 0) {
//       sum += foundElementVolume;
//     } else {
//       sum += 26 ** multiplier * foundElementVolume;
//     }
//   }
//   return sum;
// };

const convertToTitle = function (columnNumber) {
  const columns = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const val = [];
  while (columnNumber > 0) {
    --columnNumber;
    let tmp = columnNumber % 26;
    val.push(columns[tmp]);
    columnNumber = Math.floor(columnNumber / 26);
  }

  return val.reverse().join("");
};

console.log(convertToTitle(test5));
