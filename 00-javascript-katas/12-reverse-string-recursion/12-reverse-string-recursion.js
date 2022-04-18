
export const reverseStringRecursion = (word) => {
  return ((word.length > 1) ? reverseStringRecursion(word.substring(1)) : "") + word[0];
}