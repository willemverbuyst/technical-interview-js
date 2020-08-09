const regexFunctions = require('./regex');

test('changeToSpinalCase("hello") is defined', () => {
  expect(regexFunctions.changeToSpinalCase('hello')).toBeDefined();
});

test('changeToSpinalCase("Let\'s_get_things_done") is defined', () => {
  expect(regexFunctions.changeToSpinalCase("Let's_get_things_done")).toBe(
    "let's-get-things-done"
  );
});

test("replaceWordInString('A quick brown fox jumped over the lazy dog','jumped','leaped') returns 'A quick brown fox leaped over the lazy dog'", () => {
  expect(
    regexFunctions.replaceWordInString(
      'A quick brown fox jumped over the lazy dog',
      'jumped',
      'leaped'
    )
  ).toBe('A quick brown fox leaped over the lazy dog');
});

test("replaceWordInString('Today I will learn regular expressions','Today','Tomorrow') returns 'Tomorrow I will learn regular expressions'", () => {
  expect(
    regexFunctions.replaceWordInString(
      'Today I will learn regular expressions',
      'Today',
      'Tomorrow'
    )
  ).toBe('Tomorrow I will learn regular expressions');
});
