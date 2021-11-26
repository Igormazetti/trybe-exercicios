const a = 10;
const b = 15;

const lucro = (b - a) * 1000;
const imposto = (a * 1000) / 5;

if (lucro - imposto >= 0) {
  console.log(lucro - imposto);
} else {
  console.log("Valor negativo, houve prejuízo");
}
