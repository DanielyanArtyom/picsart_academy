const jewels_1 = "aA";
const stones_1 = "aAAbbbb";

const jewels_2 = "z";
const stones_2 = "ZZ";

const jewels_3 = "bB";
const stones_3 = "aaaabbzBbaz";

const numJewelsInStones = function (jewels, stones) {
  let counter = 0;
  for (let i = 0; i < jewels.length; ++i) {
    for (let j = 0; j < stones.length; ++j) {
      if (jewels[i] === stones[j]) {
        ++counter;
      }
    }
  }
  return counter;
};

const numJewelsInStones2 = function (jewels, stones) {
  let counter = 0;
  let stonesTable = {};
  for (let i = 0; i < stones.length; ++i) {
    if (stonesTable[stones[i]]) {
      ++stonesTable[stones[i]];
    } else {
      stonesTable[stones[i]] = 1;
    }
  }

  for (let i = 0; i < jewels.length; ++i) {
    counter += stonesTable[jewels[i]] ?? 0;
  }

  return counter;
};

console.log(numJewelsInStones2(jewels_1, stones_1));
