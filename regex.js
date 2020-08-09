const regexFunctions = {
  // Return string in spinal case
  changeToSpinalCase: (str) =>
    str
      .split(/\s|_|(?=[A-Z])/g)
      .join('-')
      .toLowerCase(),
};

// /***************************************************/
// // Replace word in string, preserve capital
// const replaceWordInString = (str, before, after) => {
//   const capitals = /[A-Z]/;
//   return capitals.test(before[0])
//     ? str.replace(before, after[0].toUpperCase() + after.slice(1))
//     : str.replace(before, after);
// };

// console.log(
//   replaceWordInString(
//     'A quick brown fox jumped over the lazy dog',
//     'jumped',
//     'leaped'
//   )
// );

// console.log(
//   replaceWordInString(
//     'Today I will learn regular expressions',
//     'Today',
//     'Tomorrow'
//   )
// );

// // returns
// // A quick brown fox leaped over the lazy dog
// // Tomorrow I will learn regular expressions

// /***************************************************/

module.exports = regexFunctions;
