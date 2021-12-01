let maior = 0;
function retornaMaior(arr) {
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] > maior) {
      maior = arr[index];
    }
  }
}
retornaMaior([2, 3, 6, 7, 10, 1]);
console.log(maior);
