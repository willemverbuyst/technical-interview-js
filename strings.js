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

/***************************************************/
// Reverse a string
const reverseString = (str) => {
  return str.split('').reverse().join('');
};

// returns
// [
//   'V', 'a', 'n', 'i', 'l',
//   'l', 'a', ' ', 'J', 'a',
//   'v', 'a', 'S', 'c', 'r',
//   'i', 'p', 't'
// ]

console.log(reverseString('Vanilla JavaScript'));

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
