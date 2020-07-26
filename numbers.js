// Sum all numbers in a range
function sumAll(arr) {
  let total = 0;
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  for (let i = min; i <= max; i++) {
    total += i;
  }
  return total;
}

console.log(sumAll([1, 5]));
