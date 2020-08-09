const numberFunctions = require('./numbers');

test('sumAll([1, 5]) returns 15', () => {
  expect(numberFunctions.sumAll([1, 5])).toBe(15);
});

test('sumAll([1, 5]) returns 15', () => {
  expect(numberFunctions.sumAll([1, 5])).toBeGreaterThanOrEqual(6);
});
