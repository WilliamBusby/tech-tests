
export const palindromeChecker = (word) => {
  return word === word.split("").reverse().join("");
}