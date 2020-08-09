const stringFunctions = require('./strings');

test('Split "Vanilla JavaScript" results in ["Vanilla", "JavaScript"]', () => {
  expect(stringFunctions.splitString('Vanilla JavaScript')).toEqual([
    'Vanilla',
    'JavaScript',
  ]);
});

test("splitCharacters 'Vanilla JavaScript' returns ['V', 'a', 'n', 'i', 'l','l', 'a', ' ', 'J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']", () => {
  expect(stringFunctions.splitCharacters('Vanilla JavaScript')).toEqual([
    'V',
    'a',
    'n',
    'i',
    'l',
    'l',
    'a',
    ' ',
    'J',
    'a',
    'v',
    'a',
    'S',
    'c',
    'r',
    'i',
    'p',
    't',
  ]);
});

test('reverseString_1 "Vanilla JavaScript" returns "tpircSavaJ allinaV"', () => {
  expect(stringFunctions.reverseString_1('Vanilla JavaScript')).toBe(
    'tpircSavaJ allinaV'
  );
});

test('reverseString_2 "Vanilla JavaScript" returns "tpircSavaJ allinaV"', () => {
  expect(stringFunctions.reverseString_2('Vanilla JavaScript')).toBe(
    'tpircSavaJ allinaV'
  );
});

test('reverseString_2 "Vanilla JavaScript" returns "tpircSavaJ allinaV"', () => {
  expect(stringFunctions.reverseString_2('Vanilla JavaScript')).not.toBe(
    'tpircsavaj allinav'
  );
});

test('isPalindrome "racecar" returns true', () => {
  expect(stringFunctions.isPalindrome('racecar')).toBe(true);
});

test('isPalindrome "ferrari" returns false', () => {
  expect(stringFunctions.isPalindrome('ferrari')).toBe(false);
});
test('isPalindrome "ferrari" returns false', () => {
  expect(stringFunctions.isPalindrome('ferrari')).toBe(false);
});

test('findMaxCharacters("javascriptttt") returns t', () => {
  expect(stringFunctions.findMaxCharacters('javascriptttt')).toBe('t');
});

test('findMaxCharacters("goooooood morning") returns o', () => {
  expect(stringFunctions.findMaxCharacters('goooooood morning')).toBe('o');
});

test('findMaxCharacters() is defined', () => {
  expect(stringFunctions.findMaxCharacters('goooooood morning')).toBeDefined();
});

test("findMissingLetter('abce') returns 'd'", () => {
  expect(stringFunctions.findMissingLetter('abce')).toBe('d');
});

test("findMissingLetter('ghijklmnpqrstu') returns 'o'", () => {
  expect(stringFunctions.findMissingLetter('ghijklmnpqrstu')).toBe('o');
});

test("findMissingLetter('abcd') returns undefined", () => {
  expect(stringFunctions.findMissingLetter('abcd')).toBe(undefined);
});

test("capitalizeFirstLetters_1('I love javascript') returns 'I Love Javascript'", () => {
  expect(stringFunctions.capitalizeFirstLetters_1('I love javascript')).toBe(
    'I Love Javascript'
  );
});

test("capitalizeFirstLetters_2('today is your lucky day') returns 'Today Is Your Lucky Day'", () => {
  expect(
    stringFunctions.capitalizeFirstLetters_2('today is your lucky day')
  ).toBe('Today Is Your Lucky Day');
});
