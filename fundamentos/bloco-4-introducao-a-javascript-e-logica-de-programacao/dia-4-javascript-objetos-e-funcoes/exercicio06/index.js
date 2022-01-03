let soma = 0;
function retornaSoma(n) {
  for (let index = 0; index < n + 1; index++) {
    soma += index;
  }
  console.log(soma);
}

retornaSoma(5);
