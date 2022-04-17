
export const duplicateMultiple = (numbersArr) => {
  const duplicates = [];
  for(let i = 0; i<numbersArr.length; i++) {
    if(numbersArr.indexOf(numbersArr[i]) !== i) {
      duplicates.push(i);
    }
  }
  return duplicates;
}