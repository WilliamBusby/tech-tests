
export const anagramChecker = (word1, word2) => {
  const word1Arr = word1.split("").sort();
  const word2Arr = word2.split("").sort().filter((char, index) => word1Arr[index] !== char);
  return word2Arr.length === 0;
}