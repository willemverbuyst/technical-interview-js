// Get unique elements from two arrays
// Solution 1
const getUniqueElements_1 = (arr1, arr2) =>
  [...arr1, ...arr2].filter(
    (element) => (arr1.indexOf(element) === -1) | (arr2.indexOf(element) === -1)
  );

console.log(getUniqueElements_1([1, 2, 3, 4, 7], [2, 3, 4, 5, 6]));
console.log(getUniqueElements_1([2, 3, 4], [2, 3, 4]));

// Solution 2
const getUniqueElements_2 = (arr1, arr2) =>
  [...arr1, ...arr2].filter(
    (element) => !arr1.includes(element) | !arr2.includes(element)
  );

console.log(getUniqueElements_2([1, 2, 3, 4, 7], [2, 3, 4, 5, 6]));
console.log(getUniqueElements_2([2, 3, 4], [2, 3, 4]));

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

// Remove elements from array
const removeElements = (arr, ...args) => {
  return arr.filter((el) => !args.includes(el));
};

console.log(removeElements([1, 2, 3, 4, 1, 2, 5, 3, 1, 4], 3, 4));
