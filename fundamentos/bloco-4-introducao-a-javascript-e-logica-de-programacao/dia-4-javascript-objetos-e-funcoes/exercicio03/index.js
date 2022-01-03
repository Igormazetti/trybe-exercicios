let maior = 0;
function retornaMaior(arr) {
  for (let index in arr) {
    if (arr[index] < maior) {
      maior = index;
    }
  }
}
retornaMaior([2, 4, 6, 7, 10, 0, -3]);
console.log(maior);
