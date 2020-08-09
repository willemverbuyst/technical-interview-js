const regexFunctions = {
  // Return string in spinal case
  changeToSpinalCase: (str) =>
    str
      .split(/\s|_|(?=[A-Z])/g)
      .join('-')
      .toLowerCase(),
  // // Replace word in string, preserve capital
  replaceWordInString: (str, before, after) => {
    const capitals = /[A-Z]/;
    return capitals.test(before[0])
      ? str.replace(before, after[0].toUpperCase() + after.slice(1))
      : str.replace(before, after);
  },
};

module.exports = regexFunctions;
