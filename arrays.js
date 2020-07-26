// Get unique elements from two arrays
const getUniqueElements = (arr1, arr2) =>
  [...arr1, ...arr2].filter(
    (element) => (arr1.indexOf(element) === -1) | (arr2.indexOf(element) === -1)
  );

console.log(getUniqueElements([1, 2, 3, 4, 7], [2, 3, 4, 5, 6]));
