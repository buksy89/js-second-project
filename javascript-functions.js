// javascript funtions

// String Manipulation Functions:

// Reverse string
function reverseString(s) {
  let reversedStr = "";
  for (let char of s) {
    reversedStr = char + reversedStr;
  }
  return reversedStr;
}

let inputStr = "Bukata";
console.log(`Reversed string: ${reverseString(inputStr)}`);

// count characters.
function countCharacters(s) {
  return s.replace(/ /g, "").length;
}

// Example usage:
let inputStre = "hello world";
console.log(
  `Number of characters in '${inputStre}' (excluding spaces): ${countCharacters(
    inputStre
  )}`
);

// capitalize word.

function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

let inputStrn = "i will come to the house tomorrow";
console.log(`Capitalized: ${capitalizeWords(inputStrn)}`);

// mathematical functions
// foctorial
function factorialIterative(n) {
  if (n < 0) {
    return "Factorial is not defined for negative numbers";
  }
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Example usage:
let num = 10;
console.log(`Factorial of ${num} is ${factorialIterative(num)}`); // Output: Factorial of 5 is 120

// prime  numbers.
function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  if (n <= 3) {
    return true;
  }
  if (n % 2 === 0 || n % 3 === 0) {
    return false;
  }
  let i = 5;
  while (i * i <= n) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false;
    }
    i += 6;
  }
  return true;
}

// Test the function with some examples
console.log(isPrime(1)); // False
console.log(isPrime(2)); // True
console.log(isPrime(3)); // True
console.log(isPrime(4)); // False
console.log(isPrime(17)); // True
console.log(isPrime(18)); // False
console.log(isPrime(19)); // True
console.log(isPrime(20)); // False

// fibonances
function generateFibonacci(n) {
  if (n <= 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  }

  let fibSequence = [0, 1];
  for (let i = 2; i < n; i++) {
    let nextTerm =
      fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2];
    fibSequence.push(nextTerm);
  }

  return fibSequence;
}

// Example usage:
let nTerms = 15;
console.log(
  `First ${nTerms} terms of the Fibonacci sequence: ${generateFibonacci(
    nTerms
  )}`
);
