
export const sumPairsToNum = (numbersArr, target) => {
  const pairs = [];
  for(let i = 0; i<numbersArr.length; i++) {
    for(let j = i+1; j<numbersArr.length; j++) {
      if(numbersArr[i] + numbersArr[j] === target) {
        pairs.push([numbersArr[i], numbersArr[j]]);
      }
    }
  }
  return pairs;
}