const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const numerosPares = numbers
  .filter((numbers) => numbers % 2 === 0)
  .reduce((acc, number) => acc + number);
console.log(numerosPares);

// Somente com reduce:

const sumPair = (currentValue, number) =>
  number % 2 === 0 ? currentValue + number : currentValue;

const sumNumbers = (array) => array.reduce(sumPair, 0);

console.log(sumNumbers(numbers)); // 152
