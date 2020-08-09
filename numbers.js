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
  // FizzBuzz - Traversy Media
  fizzBuzz: () => {
    let arr = [];
    for (let i = 1; i <= 15; i++) {
      if (i % 15 === 0) {
        arr.push('FizzBuzz');
      } else if (i % 5 === 0) {
        arr.push('Buzz');
      } else if (i % 3 === 0) {
        arr.push('Fizz');
      } else {
        arr.push(i);
      }
    }
    return arr;
  },
};

module.exports = numberFunctions;
