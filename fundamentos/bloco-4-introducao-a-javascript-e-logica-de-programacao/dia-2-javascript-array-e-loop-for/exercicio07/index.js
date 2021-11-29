let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let min = Number.POSITIVE_INFINITY;

for (let i = 0; i < numbers.length; i += 1) {
  min = Math.min(min, numbers[i]);
}
console.log(min);
