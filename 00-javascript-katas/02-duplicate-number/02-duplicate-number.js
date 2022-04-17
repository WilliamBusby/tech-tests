
const duplicateNumber = (numbersArr) => {
  for(let i = 0; i<numbersArr.length; i++) {
    if(numbersArr.indexOf(numbersArr[i]) !== i) {
      return numbersArr[i];
    }
  }
}