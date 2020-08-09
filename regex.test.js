const regexFunctions = require('./regex');

test('changeToSpinalCase("hello") is defined', () => {
  expect(regexFunctions.changeToSpinalCase('hello')).toBeDefined();
});

test('changeToSpinalCase("Let\'s_get_things_done") is defined', () => {
  expect(regexFunctions.changeToSpinalCase("Let's_get_things_done")).toBe(
    "let's-get-things-done"
  );
});

test('changeToSpinalCase("NoWayJosè") is defined', () => {
  expect(regexFunctions.changeToSpinalCase('NoWayJosè')).toBe('no-way-josè');
});
