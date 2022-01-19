// 1 - Escreva uma função que dado um array de nomes e um nome retorne true se ele estiver contido e caso contrário, retorne false , use some ;

const names = ["Mateus", "José", "Ana", "Cláudia", "Bruna"];

const hasName = (arr, name) => {
  if (arr.some((ppl) => ppl === name)) {
    return true;
  } else {
    return false;
  }
};

// console.log(hasName(names, "Antonio"));

// 2 - Escreva uma função que dado um array de pessoas e uma idade mínima retorne true se todas tiverem a idade maior ou
// igual a mínima e caso contrário false , use every ;

const people = [
  { name: "Mateus", age: 18 },
  { name: "José", age: 16 },
  { name: "Ana", age: 23 },
  { name: "Cláudia", age: 20 },
  { name: "Bruna", age: 19 },
];

const verifyAges = (arr, minimumAge) => {
  if (arr.every((ppl) => ppl.age >= minimumAge)) {
    return true;
  } else {
    return false;
  }
};

console.log(verifyAges(people, 40));
