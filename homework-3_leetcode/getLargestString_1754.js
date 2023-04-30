const test1Word1 = "cabaa";
const test1Word2 = "bcaaa"; // "cbcabaaaaa"
const test2Word1 = "abcabc";
const test2Word2 = "abdcaba"; // "abdcabcabcaba"

const largestMerge = function (word1, word2) {
  let merge = "";
  while (word1 && word2) {
    if (word1 > word2) {
      merge += word1[0];
      word1 = word1.substring(1);
    } else {
      merge += word2[0];
      word2 = word2.substring(1);
    }
  }

  if (word1) {
    merge += word1;
  }
  if (word2) {
    merge += word2;
  }

  return merge;
};

largestMerge(test2Word1, test2Word2);
