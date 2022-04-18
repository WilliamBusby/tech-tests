
const stringPermutations = (text) => {
  const permutations = [];

  if (text.length === 1) {
    permutations.push(text);
    return permutations;
  }

  text.split("").forEach((char, index) => {
    const charsLeft = text.substring(0, index) + text.substring(index + 1);
    stringPermutations(charsLeft).forEach((permutation) => {
        permutations.push(char + permutation);
      });
  });
  return permutations;
}

console.log(stringPermutations("test"))