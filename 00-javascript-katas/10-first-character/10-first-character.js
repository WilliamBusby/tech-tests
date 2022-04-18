
export const firstNonRepeatingChar = (word) => {
  const chars = word.split("");
  for(let i = 0; i<chars.length; i++) {
    const amountOfChar = chars.filter(char => char === chars[i]).length;
    if(amountOfChar === 1) {
      return chars[i];
    }
  }
}