const arrayFunctions = {
  // Get unique elements from two arrays
  // Solution 1
  getUniqueElements_1: (arr1, arr2) =>
    [...arr1, ...arr2].filter(
      (element) =>
        (arr1.indexOf(element) === -1) | (arr2.indexOf(element) === -1)
    ),
  // Solution 2
  getUniqueElements_2: (arr1, arr2) =>
    [...arr1, ...arr2].filter(
      (element) => !arr1.includes(element) | !arr2.includes(element)
    ),
  // Remove elements from array
  removeElements: (arr, ...args) => {
    return arr.filter((el) => !args.includes(el));
  },
  // Unite arrays without duplicates
  uniteUniqueElements: (...args) => [...new Set(args.flat())],
  // Pair DNA - freeCodeCamp
  pairDNA: (str) => {
    const DNApairs = {
      A: 'T',
      T: 'A',
      C: 'G',
      G: 'C',
    };
    return str.split('').map((l) => [l, DNApairs[l]]);
  },
};

/***************************************************/

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

/***************************************************/

/***************************************************/

module.exports = arrayFunctions;
