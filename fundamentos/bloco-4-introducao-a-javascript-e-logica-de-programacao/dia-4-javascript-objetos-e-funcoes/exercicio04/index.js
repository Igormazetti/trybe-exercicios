function retornaMaior(arr) {
  let maior = 0;

  for (let index in arr) {
    if (arr[index].length > maior) {
      maior = arr[index].length;
    }
  }
  console.log(arr);
}

retornaMaior(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]);
