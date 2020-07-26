// Split string
const splitString = (str) => {
  return str.split(' ');
};

console.log(splitString('Vanilla JavaScript'));

// Split Characters in string
const splitCharacters = (str) => {
  return str.split('');
};

console.log(splitCharacters('Vanilla JavaScript'));

// Reverse a string
const reverseString = (str) => {
  return str.split('').reverse().join('');
};

console.log(reverseString('Vanilla JavaScript'));
