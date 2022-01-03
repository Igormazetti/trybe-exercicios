let result;
function retornaRepetido(arr) {
  for (i of arr) {
    if (i === arr[i]) {
      result = i;
    }
  }
  console.log(result);
}

retornaRepetido([2, 3, 2, 3, 3, 2, 3]);
