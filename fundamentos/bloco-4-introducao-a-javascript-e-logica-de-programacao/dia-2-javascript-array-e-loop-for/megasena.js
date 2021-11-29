let firstNumber = Math.floor(Math.random() * 60) + 1;
let secondNumber = Math.floor(Math.random() * 60) + 1;
let thirdNumber = Math.floor(Math.random() * 60) + 1;
let fourthNumber = Math.floor(Math.random() * 60) + 1;
let fifthNumber = Math.floor(Math.random() * 60) + 1;
let sixthNumber = Math.floor(Math.random() * 60) + 1;

let megasena = [
  firstNumber,
  secondNumber,
  thirdNumber,
  fourthNumber,
  fifthNumber,
  sixthNumber,
];
let igor = [7, 17, 34, 42, 48, 55];

let count = 0;

for (
  let indexMegaSena = 0;
  indexMegaSena < megasena.length;
  indexMegaSena += 1
) {
  console.log("megasena: " + megasena[indexMegaSena]);
  for (let indexIgor = 0; indexIgor < igor.length; indexIgor += 1) {
    console.log("igor: " + igor[indexIgor]);

    if (megasena[indexMegaSena] === igor[indexIgor]) {
      console.log("Acertou!!");
      count += 1;
    }
  }
}

console.log("Acertos: " + count);
console.log(megasena);
