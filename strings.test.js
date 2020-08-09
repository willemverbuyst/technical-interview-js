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

test('findMaxCharacters("goooooood morning") returns o', () => {
  expect(stringFunctions.findMaxCharacters('goooooood morning')).toBeDefined();
});
