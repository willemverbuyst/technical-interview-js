/***************************************************/
// Split string
const splitString = (str) => {
  return str.split(' ');
};

console.log(splitString('Vanilla JavaScript'));

// returns
// [ 'Vanilla', 'JavaScript' ]

/***************************************************/
// Split characters in string
const splitCharacters = (str) => {
  return str.split('');
};

console.log(splitCharacters('Vanilla JavaScript'));

// returns
// [
//   'V', 'a', 'n', 'i', 'l',
//   'l', 'a', ' ', 'J', 'a',
//   'v', 'a', 'S', 'c', 'r',
//   'i', 'p', 't'
// ]

/***************************************************/
// Reverse a string
// Solution 1
const reverseString_1 = (str) => {
  return str.split('').reverse().join('');
};

// Solution 2 - Traversy Media
const reverseString_2 = (str) =>
  str.split('').reduce((reversedString, char) => char + reversedString, '');

console.log(reverseString_1('Vanilla JavaScript'));
console.log(reverseString_2('Vanilla JavaScript'));

// returns
// tpircSavaJ allinaV

/***************************************************/
// Are the parantheses balanced?
const areParenthesisBalanced = (str) => {
  return !str.split('').reduce((a, b) => {
    if (b === '(' || b === '{' || b === '[') {
      return ++a;
    } else if (b === ')' || b === '}' || b === ']') {
      return --a;
    }

    return a;
  }, 0);
};

console.log(areParenthesisBalanced('[()]{}{[()()]()}'));
console.log(
  areParenthesisBalanced(
    '[{()()}({[]})]({}[({})])((((((()[])){}))[]{{{({({({{{{{{}}}}}})})})}}}))[][][]'
  )
);
console.log(areParenthesisBalanced('({(()))}}'));

// returns
// true
// true
// false

/***************************************************/
// Find missing letter
const findMissingLetter = (str) => {
  const alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const start = alpha.indexOf(str[0]);
  const end = alpha.indexOf(str[str.length - 1]);

  return alpha.slice(start, end + 1).filter((l) => str.indexOf(l) === -1)[0];
};

console.log(findMissingLetter('abce'));
console.log(findMissingLetter('ghijklmnpqrstu'));
console.log(findMissingLetter('abcd'));

// returns
// 'd'
// 'o'
// undefined

/***************************************************/
// Validate palindrome - Traversy Media
const isPalindrome = (str) =>
  str === str.split('').reduce((revString, char) => char + revString);

console.log(isPalindrome('racecar'));
console.log(isPalindrome('ferrari'));

// returns
// true
// false
