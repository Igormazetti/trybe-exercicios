// 1 - Dada uma matriz, transforme em um array.

const arrays = [["1", "2", "3"], [true], [4, 5, 6]];

// function flatten() {
//   const newArr = arrays
//     .map((arr) => arr)
//     .reduce((obj, nextObj) => [obj + nextObj]);
//   return newArr;
// }

// console.log(flatten());

// resolução gabarito

function flatten() {
  return arrays.reduce((acc, curr) => acc.concat(curr), []);
}

console.log(flatten());
