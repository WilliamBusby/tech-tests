
export const duplicateCharacters = (sentence) => {
  const chars = [];
  for(let i = 0; i<sentence.length; i++) {
    if(chars.contains(sentence.charAt(i))) {
      console.log(sentence.charAt(i));
    } else {
      chars.push(sentence.charAt(i));
    }
  }
}