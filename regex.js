/***************************************************/
// Return string in spinal case
const changeToSpinalCase = (str) => {
  return str
    .split(/\s|_|(?=[A-Z])/g)
    .join('-')
    .toLowerCase();
};

console.log(changeToSpinalCase("Let's_get_things_done"));
console.log(changeToSpinalCase('NoWayJosè'));

// returns
// let's-get-things-done
// no-way-josè

/***************************************************/
// Replace word in string, preserve capital
const replaceWordInString = (str, before, after) => {
  const capitals = /[A-Z]/;
  return capitals.test(before[0])
    ? str.replace(before, after[0].toUpperCase() + after.slice(1))
    : str.replace(before, after);
};

console.log(
  replaceWordInString(
    'A quick brown fox jumped over the lazy dog',
    'jumped',
    'leaped'
  )
);

console.log(
  replaceWordInString(
    'Today I will learn regular expressions',
    'Today',
    'Tomorrow'
  )
);

// returns
// A quick brown fox leaped over the lazy dog
// Tomorrow I will learn regular expressions

/***************************************************/
