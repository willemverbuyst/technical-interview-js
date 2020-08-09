const arrayFunctions = require('./arrays');

test('getUniqueElements_1([1, 2, 3, 4, 7], [2, 3, 4, 5, 6]) returns [1, 7, 5, 6]', () => {
  expect(
    arrayFunctions.getUniqueElements_1([1, 2, 3, 4, 7], [2, 3, 4, 5, 6])
  ).toEqual([1, 7, 5, 6]);
});

test('getUniqueElements_1([2, 3, 4], [2, 3, 4]) returns []', () => {
  expect(arrayFunctions.getUniqueElements_1([2, 3, 4], [2, 3, 4])).toEqual([]);
});

// console.log();
// console.log(getUniqueElements_1([2, 3, 4], [2, 3, 4]));

// // returns
// //
// // []
