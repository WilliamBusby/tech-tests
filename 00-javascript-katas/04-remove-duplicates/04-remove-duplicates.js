
export const removeDuplicates = (numbersArr) => {
  const setReturn = new Set();

  numbersArr.forEach(num => setReturn.add(num));
  
  return setReturn;
}