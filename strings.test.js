const stringFunctions = require('./strings');

test('Split "Vanilla JavaScript" results in ["Vanilla", "JavaScript"]', () => {
  expect(stringFunctions.splitString('Vanilla JavaScript')).toEqual([
    'Vanilla',
    'JavaScript',
  ]);
});
