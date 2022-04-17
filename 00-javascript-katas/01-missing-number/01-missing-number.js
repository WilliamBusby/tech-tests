
export const missingNumber = (numbersArr) => {

  const missingNumbers = [];

  const startingVal = Math.min(...numbersArr);
  const finalVal = Math.max(...numbersArr);

  for(let i = startingVal; i<finalVal; i++) {
    if(numbersArr.indexOf(i) === -1) {
      missingNumbers.push(i);
    }
  }

  return missingNumbers;
}