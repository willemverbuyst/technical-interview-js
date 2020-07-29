/***************************************************/
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

// returns
// 15

/***************************************************/
// Reverse number - Traversy Media
const reverseNumber = (num) =>
  parseInt(num.toString().split('').reverse().join(''));

console.log(reverseNumber(3456));
console.log(reverseNumber(123));

// returns
// 6543
