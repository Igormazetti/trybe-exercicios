let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let elements = 0;

for (let i = 0; i < numbers.length; i++) {
  elements = numbers[i] * numbers[i + 1];
}

console.log(elements);
