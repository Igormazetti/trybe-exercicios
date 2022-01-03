let maior = 0;
function retornaMaior(arr) {
  for (let index in arr) {
    if (arr[index] > maior) {
      maior = index;
    }
  }
}
retornaMaior([2, 3, 6, 7, 10, 1]);
console.log(maior);
