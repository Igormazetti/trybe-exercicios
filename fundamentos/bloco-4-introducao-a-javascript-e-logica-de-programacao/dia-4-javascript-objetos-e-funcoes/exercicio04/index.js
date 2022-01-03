function retornaMaior(arr) {
  let maior = 0;
  let nome = "";

  for (let index in arr) {
    if (arr[index].length > maior) {
      maior = arr[index].length;
      nome = arr[index];
    }
  }
  console.log(nome);
}

retornaMaior(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]);
