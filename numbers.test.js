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

test('Length reverseNumber(321) is equal to 3', () => {
  expect(numberFunctions.reverseNumber(321).toString().length).toBe(3);
});

test('reverseNumber(-1233456) returns -6543321', () => {
  expect(numberFunctions.reverseNumber(-1233456)).toBe(-6543321);
});

test('fizzBuzz() returns [1,2, "Fizz", 4, "Buzz", 6, 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]', () => {
  expect(numberFunctions.fizzBuzz()).toEqual([
    1,
    2,
    'Fizz',
    4,
    'Buzz',
    'Fizz',
    7,
    8,
    'Fizz',
    'Buzz',
    11,
    'Fizz',
    13,
    14,
    'FizzBuzz',
  ]);
});

test('fizzBuzz() returns 15', () => {
  expect(numberFunctions.fizzBuzz()).toHaveLength(15);
});

test('result of fizzBuzz() does not contains 16 and 17', () => {
  const expected = [16, 17];
  expect(numberFunctions.fizzBuzz()).toEqual(
    expect.not.arrayContaining(expected)
  );
});

test("result of fizzBuzz() contains 1, 2, 'Fizz', 'Buzz' and 'FizzBuzz'", () => {
  const expected = [1, 2, 'Fizz', 'Buzz', 'FizzBuzz'];
  expect(numberFunctions.fizzBuzz()).toEqual(expect.arrayContaining(expected));
});
