const arrayFunctions = {
  // Get unique elements from two arrays
  // Solution 1
  getUniqueElements_1: (arr1, arr2) =>
    [...arr1, ...arr2].filter(
      (element) =>
        (arr1.indexOf(element) === -1) | (arr2.indexOf(element) === -1)
    ),
};

// Solution 2
const getUniqueElements_2 = (arr1, arr2) =>
  [...arr1, ...arr2].filter(
    (element) => !arr1.includes(element) | !arr2.includes(element)
  );

console.log(getUniqueElements_2([1, 2, 3, 4, 7], [2, 3, 4, 5, 6]));
console.log(getUniqueElements_2([2, 3, 4], [2, 3, 4]));

// returns
// [ 1, 7, 5, 6 ]
// []

/***************************************************/
// Sort an array of objects, by value
const persons = [
  {
    name: 'Jack',
    age: 23,
  },
  {
    name: 'Sifan',
    age: 34,
  },
  {
    name: 'Hilary',
    age: 104,
  },
];

const sortPersons = (arr, key) => {
  return arr.sort((a, b) => a[key] - b[key]);
};

console.log(sortPersons(persons, 'age'));

// returns
// [
// { name: 'Jack', age: 23 },
// { name: 'Sifan', age: 34 },
// { name: 'Hilary', age: 104 }
// ]

/***************************************************/
// Remove elements from array
const removeElements = (arr, ...args) => {
  return arr.filter((el) => !args.includes(el));
};

console.log(removeElements([1, 2, 3, 4, 1, 2, 5, 3, 1, 4], 3, 4));

// returns
// [ 1, 2, 1, 2, 5, 1 ]

/***************************************************/
// Unite arrays without duplicates
const uniteUniqueElements = (...args) => [...new Set(args.flat())];

console.log(uniteUniqueElements([1, 3, 'two'], [5, 'two', 1, 4], ['two', 1]));

// returns
// [ 1, 3, 'two', 5, 4 ]

/***************************************************/
// Pair DNA - freeCodeCamp
const pairDNA = (str) => {
  const DNApairs = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
  };
  return str.split('').map((l) => [l, DNApairs[l]]);
};

console.log(pairDNA('GCG'));
console.log(pairDNA('TTGAG'));
console.log(pairDNA('CTCTA'));

// returns
//  [["G", "C"], ["C","G"],["G", "C"]]
// [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]
// [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]

/***************************************************/

module.exports = arrayFunctions;
