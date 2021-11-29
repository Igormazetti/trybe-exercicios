let megasena = [];
for (let count = 0; count < 6; count += 1) {
  megasena.push(Math.floor(Math.random() * 60) + 1);
}

let igor = [7, 17, 34, 42, 48, 55];

let countHits = 0;

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
      countHits += 1;
    }
  }
}

console.log("Acertos: " + count);
console.log(megasena);
