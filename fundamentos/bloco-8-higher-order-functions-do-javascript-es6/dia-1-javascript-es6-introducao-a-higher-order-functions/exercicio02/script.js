const verify = (number, result) => number === result;

const sorteio = (num, check) => {
  const numberGenerator = Math.floor(Math.random() * 5 + 1);

  return check(num, numberGenerator)
    ? "Parabéns você ganhou!"
    : "Tente novamente!";
};

console.log(sorteio(2, verify));
