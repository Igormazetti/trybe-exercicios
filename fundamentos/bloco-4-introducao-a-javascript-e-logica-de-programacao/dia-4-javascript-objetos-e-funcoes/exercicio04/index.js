function retornaMaior(arr) {
  let maior = 0;

  for (let index in arr) {
    if (arr[index].length > maior) {
      maior = arr[index];
    }
  }
  console.log(maior);
}

retornaMaior(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]);
