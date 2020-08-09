const stringFunctions = {
  // Split string
  splitString: (str) => str.split(' '),
  // Split characters in string
  splitCharacters: (str) => str.split(''),
  // Reverse a string
  // Solution 1
  reverseString_1: (str) => str.split('').reverse().join(''),
  // Solution 2 - Traversy Media
  reverseString_2: (str) =>
    str.split('').reduce((reversedString, char) => char + reversedString, ''),
  // Validate palindrome - Traversy Media
  isPalindrome: (str) =>
    str === str.split('').reduce((revString, char) => char + revString),
  // Find max characters - Traversy Media
  findMaxCharacters: (str) => {
    const charObj = {};
    str.split('').forEach((char) => (charObj[char] = (charObj[char] || 0) + 1));
    return Object.keys(charObj).reduce((a, b) =>
      charObj[a] > charObj[b] ? a : b
    );
  },
};

// console.log(findMaxCharacters('javascriptttt'));
// console.log(findMaxCharacters('goooooood morning'));

// // returns
// // t
// // o

// /***************************************************/
// // Are the parantheses balanced?
// const areParenthesisBalanced = (str) => {
//   return !str.split('').reduce((a, b) => {
//     if (b === '(' || b === '{' || b === '[') {
//       return ++a;
//     } else if (b === ')' || b === '}' || b === ']') {
//       return --a;
//     }

//     return a;
//   }, 0);
// };

// console.log(areParenthesisBalanced('[()]{}{[()()]()}'));
// console.log(
//   areParenthesisBalanced(
//     '[{()()}({[]})]({}[({})])((((((()[])){}))[]{{{({({({{{{{{}}}}}})})})}}}))[][][]'
//   )
// );
// console.log(areParenthesisBalanced('({(()))}}'));

// // returns
// // true
// // true
// // false

// /***************************************************/
// // Find missing letter
// const findMissingLetter = (str) => {
//   const alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');
//   const start = alpha.indexOf(str[0]);
//   const end = alpha.indexOf(str[str.length - 1]);

//   return alpha.slice(start, end + 1).filter((l) => str.indexOf(l) === -1)[0];
// };

// console.log(findMissingLetter('abce'));
// console.log(findMissingLetter('ghijklmnpqrstu'));
// console.log(findMissingLetter('abcd'));

// // returns
// // 'd'
// // 'o'
// // undefined

// /***************************************************/

// /***************************************************/
// // Capitalize first letters - Traversy Media
// // Solution 1
// const capitalizeFirstLetters_1 = (str) =>
//   str
//     .split(' ')
//     .map((word) => word[0].toUpperCase() + word.substr(1))
//     .join(' ');

// // Solution 2 - regex
// const capitalizeFirstLetters_2 = (str) =>
//   str.replace(/\b[a-z]/gi, (letter) => letter.toUpperCase());

// console.log(capitalizeFirstLetters_1('I love javascript'));
// console.log(capitalizeFirstLetters_1('today is you lucky day'));
// console.log(capitalizeFirstLetters_2('I love javascript'));
// console.log(capitalizeFirstLetters_2('today is you lucky day'));

// // returns
// // I Love Javascript
// // Today Is Your Lucky Day

// /***************************************************/

module.exports = stringFunctions;
