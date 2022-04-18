
const onlyDigits = (word) => {
  return word.split("").filter(char => isNaN(char)).length === 0;
}