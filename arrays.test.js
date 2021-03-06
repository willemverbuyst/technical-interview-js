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

test('removeElements([1, 2, 3, 4, 1, 2, 5, 3, 1, 4], 3, 4)) not to contain [3, 4]', () => {
  const excluded = [3, 4];
  expect(
    arrayFunctions.removeElements([1, 2, 3, 4, 1, 2, 5, 3, 1, 4], 3, 4)
  ).toEqual(expect.not.arrayContaining(excluded));
});

test('removeElements([1, 2, 3, 4, 1, 2, 5, 3, 1, 4], 3, 4)) returns [ 1, 2, 1, 2, 5, 1 ]', () => {
  expect(
    arrayFunctions.removeElements([1, 2, 3, 4, 1, 2, 5, 3, 1, 4], 3, 4)
  ).toHaveLength(6);
});

test('uniteUniqueElements([1, 3, "two"], [5, "two", 1, 4], ["two", 1]) returns [ 1, 3, "two", 5, 4 ]', () => {
  expect(
    arrayFunctions.uniteUniqueElements(
      [1, 3, 'two'],
      [5, 'two', 1, 4],
      ['two', 1]
    )
  ).toEqual([1, 3, 'two', 5, 4]);
});

test('pairDNA("GCG") returns [["G", "C"], ["C","G"],["G", "C"]]', () => {
  expect(arrayFunctions.pairDNA('GCG')).toEqual([
    ['G', 'C'],
    ['C', 'G'],
    ['G', 'C'],
  ]);
});

test('pairDNA("TTGAG") returns [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]', () => {
  expect(arrayFunctions.pairDNA('TTGAG')).toEqual([
    ['T', 'A'],
    ['T', 'A'],
    ['G', 'C'],
    ['A', 'T'],
    ['G', 'C'],
  ]);
});

test('pairDNA("CTCTA") returns [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]', () => {
  expect(arrayFunctions.pairDNA('CTCTA')).toEqual([
    ['C', 'G'],
    ['T', 'A'],
    ['C', 'G'],
    ['T', 'A'],
    ['A', 'T'],
  ]);
});

test('pairDNA("CTCTA") returns true', () => {
  const DNA = 'CTCTA';
  const dnaPair = [
    ['C', 'G'],
    ['T', 'A'],
    ['C', 'G'],
    ['T', 'A'],
    ['A', 'T'],
  ];
  expect(arrayFunctions.pairDNA(DNA).length).toEqual(dnaPair.length);
});

test('sortPersons(persons, "age") sorts object by age-property', () => {
  const persons = [
    {
      name: 'Jack',
      age: 23,
    },
    {
      name: 'Sifan',
      age: 34,
    },
    {
      name: 'Hilary',
      age: 104,
    },
  ];
  expect(arrayFunctions.sortPersons(persons, 'age')).toEqual([
    { name: 'Jack', age: 23 },
    { name: 'Sifan', age: 34 },
    { name: 'Hilary', age: 104 },
  ]);
});
