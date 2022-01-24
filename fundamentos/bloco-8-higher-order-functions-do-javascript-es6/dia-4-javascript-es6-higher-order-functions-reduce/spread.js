// Faça uma lista com as suas frutas favoritas
const specialFruit = ["banana", "laranja", "limão"];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ["abacaxi", "maçã", "manga"];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));
