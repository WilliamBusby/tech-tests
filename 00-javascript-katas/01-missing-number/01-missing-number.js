
export const missingNumber = (numbersArr) => {
  const fullNumbers = Array.from(Array(finalVal-startingVal+1).keys()).map(num => num + startingVal);
  return fullNumbers.filter(num => !numbersArr.includes(num));
}