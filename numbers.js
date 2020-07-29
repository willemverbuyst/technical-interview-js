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
  parseInt(num.toString().split('').reverse().join('')) * Math.sign(num);

console.log(reverseNumber(3456));
console.log(reverseNumber(123));
console.log(reverseNumber(-123));

// returns
// 6543
// 321
// -321

/***************************************************/
// FizzBuzz - Traversy Media
const fizzBuzz = () => {
  for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
      console.log('FizzBuzz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else {
      console.log(i);
    }
  }
};

fizzBuzz();
// returns
// 1
// 2
// Fizz
// 4
// Buzz
// ...
// 14
// FizzBuzz
// 16
// ...
