// Fizzbuzz++ code
// Using fs to write to files

const fs = require('fs');

// Prime number checking

const checkPrimeNumber = (num) => {
  for(let i = 2; i<=Math.sqrt(num); i++) {
    if(num % i == 0) return false;
  }
  return num > 1;
}

// Check number is divisble by other number

const checkDivisbleByNum = (num, divider) => {
  return num % divider == 0;
}

const writeToFile = (text) =>{
  fs.appendFileSync("./output.txt", text, err => {
    if(err) {
      console.log(err);
      return;
    }
  });
}

const checkStringResult = (i) => {
  if(checkPrimeNumber(i)) return "FIZZBUZZ++"; // Checks for prime number
  // Check if divisble by 3, add "FIZZ" to string, if divisble by 5, add "BUZZ" to string
  const fizzAndOrBuzz = (checkDivisbleByNum(i,3) ? "FIZZ" : "") + (checkDivisbleByNum(i,5) ? "BUZZ" : "");
  // If fizzAndOrBuzz is empty, return i, otherwise return fizzAndOrBuzz
  return (fizzAndOrBuzz) ? fizzAndOrBuzz : i;
}

// Run for nums 1 - 500
for(let i = 1; i<=500; i++) {
  writeToFile(checkStringResult(i) + "\n");
}