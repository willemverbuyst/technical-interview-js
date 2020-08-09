const arrayFunctions = require('./arrays');

test('getUniqueElements_1([1, 2, 3, 4, 7], [2, 3, 4, 5, 6]) returns [1, 7, 5, 6]', () => {
  expect(
    arrayFunctions.getUniqueElements_1([1, 2, 3, 4, 7], [2, 3, 4, 5, 6])
  ).toEqual([1, 7, 5, 6]);
});

test('getUniqueElements_1([2, 3, 4], [2, 3, 4]) returns []', () => {
  expect(arrayFunctions.getUniqueElements_1([2, 3, 4], [2, 3, 4])).toEqual([]);
});

test('getUniqueElements_2([1, 2, 3, 4, 7], [2, 3, 4, 5, 6]) returns [1, 7, 5, 6]', () => {
  expect(
    arrayFunctions.getUniqueElements_2([1, 2, 3, 4, 7], [2, 3, 4, 5, 6])
  ).toEqual([1, 7, 5, 6]);
});

test('getUniqueElements_2([2, 3, 4], [2, 3, 4]) returns []', () => {
  expect(arrayFunctions.getUniqueElements_2([2, 3, 4], [2, 3, 4])).toEqual([]);
});

test('removeElements([1, 2, 3, 4, 1, 2, 5, 3, 1, 4], 3, 4)) returns [ 1, 2, 1, 2, 5, 1 ]', () => {
  expect(
    arrayFunctions.removeElements([1, 2, 3, 4, 1, 2, 5, 3, 1, 4], 3, 4)
  ).toEqual([1, 2, 1, 2, 5, 1]);
});

test('removeElements([1, 2, 3, 4, 1, 2, 5, 3, 1, 4], 3, 4)) returns [ 1, 2, 1, 2, 5, 1 ]', () => {
  expect(
    arrayFunctions.removeElements([1, 2, 3, 4, 1, 2, 5, 3, 1, 4], 3, 4)
  ).toHaveLength(6);
});
