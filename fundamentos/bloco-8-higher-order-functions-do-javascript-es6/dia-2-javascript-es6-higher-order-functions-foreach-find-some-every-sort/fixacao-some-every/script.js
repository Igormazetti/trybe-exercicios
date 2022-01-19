// 1 - Escreva uma função que dado um array de nomes e um nome retorne true se ele estiver contido e caso contrário, retorne false , use some ;

const names = ["Mateus", "José", "Ana", "Cláudia", "Bruna"];

const hasName = (arr, name) => {
  if (arr.some((ppl) => ppl === name)) {
    return true;
  } else {
    return false;
  }
};

console.log(hasName(names, "Antonio"));
