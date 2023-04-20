const word1_1 = "abc";
const word2_1 = "pqr";

const word1_2 = "ab";
const word2_2 = "pqrs";

const word1_3 = "abcd";
const word2_3 = "pq";

const mergeAlternately = function (word1, word2) {
  let newWord = "";

  for (let i = 0; i < word1.length || i < word2.length; ++i) {
    if (word1[i] !== undefined) {
      newWord += word1[i];
    }
    if (word2[i] !== undefined) {
      newWord += word2[i];
    }
  }

  return newWord;
};

const mergeAlternately2 = function (word1, word2) {
  let newWord = "";
  let maxLoopsCount = word1.length > word2.length ? word1.length : word2.length;

  for (let i = 0; i < maxLoopsCount; ++i) {
    newWord += (word1[i] ?? "") + (word2[i] ?? "");
  }
  return newWord;
};

console.log(mergeAlternately2(word1_1, word2_1));
