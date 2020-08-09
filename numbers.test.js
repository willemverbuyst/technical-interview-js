const numberFunctions = require('./numbers');

test('sumAll([1, 5]) returns 15', () => {
  expect(numberFunctions.sumAll([1, 5])).toBe(15);
});

test('sumAll([1, 5]) returns 15', () => {
  expect(numberFunctions.sumAll([1, 5])).toBeGreaterThanOrEqual(6);
});

test('reverseNumber(3456) returns 6543', () => {
  expect(numberFunctions.reverseNumber(3456)).toBe(6543);
});

test('reverseNumber(321) returns 123', () => {
  expect(numberFunctions.reverseNumber(321)).toBe(123);
});

test('reverseNumber(-1233456) returns -6543321', () => {
  expect(numberFunctions.reverseNumber(-1233456)).toBe(-6543321);
});
