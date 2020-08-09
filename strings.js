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
  // Find missing letter
  findMissingLetter: (str) => {
    const alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const start = alpha.indexOf(str[0]);
    const end = alpha.indexOf(str[str.length - 1]);
    return alpha.slice(start, end + 1).filter((l) => str.indexOf(l) === -1)[0];
  },
  // Capitalize first letters - Traversy Media
  // Solution 1
  capitalizeFirstLetters_1: (str) =>
    str
      .split(' ')
      .map((word) => word[0].toUpperCase() + word.substr(1))
      .join(' '),
  // Solution 2 - regex
  capitalizeFirstLetters_2: (str) =>
    str.replace(/\b[a-z]/gi, (letter) => letter.toUpperCase()),
};

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

module.exports = stringFunctions;
