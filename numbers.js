const numberFunctions = {
  // Sum all numbers in a range
  sumAll: (arr) => {
    let total = 0;
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    for (let i = min; i <= max; i++) {
      total += i;
    }
    return total;
  },
  // Reverse number - Traversy Media
  reverseNumber: (num) =>
    parseInt(num.toString().split('').reverse().join('')) * Math.sign(num),
};

// /***************************************************/
// // FizzBuzz - Traversy Media
// const fizzBuzz = () => {
//   for (let i = 1; i <= 100; i++) {
//     if (i % 15 === 0) {
//       console.log('FizzBuzz');
//     } else if (i % 5 === 0) {
//       console.log('Buzz');
//     } else if (i % 3 === 0) {
//       console.log('Fizz');
//     } else {
//       console.log(i);
//     }
//   }
// };

// fizzBuzz();
// // returns
// // 1
// // 2
// // Fizz
// // 4
// // Buzz
// // ...
// // 14
// // FizzBuzz
// // 16
// // ...

module.exports = numberFunctions;
