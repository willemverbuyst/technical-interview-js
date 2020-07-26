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
