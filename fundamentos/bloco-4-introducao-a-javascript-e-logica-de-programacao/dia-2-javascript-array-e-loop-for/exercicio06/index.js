let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let imp = 0;

for (let index = 0; index < numbers.length; index += 1) {
  imp = numbers[index];
  if (imp % 2 !== 0) {
    console.log(imp);
  } else {
    console.log("nenhum valor ímpar encontrado");
  }
}
