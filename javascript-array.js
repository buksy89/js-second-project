// javascript array functions
function findMax(arr) {
  return Math.max(...arr);
}

let numbers = [3, 5, 7, 10, 8];
console.log(`Maximum value: ${findMax(numbers)}`);

// Addup a small array numbers

function sumArray(arr) {
  let sum = 0;
  let num = [19, 65, 1, 2, 6, 1, 9, 9, 2, 1, 20];

  let i = 0;
  while (i < num.length) {
    sum += num[i];
    i += 1;
  }

  console.log(sum);
}
sumArray();

// filter array

function filterArray(arr, condition) {
  return arr.filter(condition);
}

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 28];
let filteredNumbers = filterArray(numbers, (num) => num % 2 === 0); // Filter even numbers
console.log("Filtered array:", filteredNumbers);
