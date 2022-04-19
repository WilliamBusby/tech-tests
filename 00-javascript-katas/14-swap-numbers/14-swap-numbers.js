
export const swapNumbers = (numbersArr, pos1, pos2) => {
  let num1 = numbersArr[pos1];
  let num2 = numbersArr[pos2];

  num1 = num1 + num2;
  numbersArr[pos1] = num1 - num2;
  numbersArr[pos2] = num1 - numbersArr[pos1];

  return numbersArr;
  
}