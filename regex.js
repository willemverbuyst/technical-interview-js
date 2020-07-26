/***************************************************/
// Return string in spinal case
const changeToSpinalCase = (str) => {
  return str
    .split(/\s_|(?=[A-Z])/g)
    .join('-')
    .toLowerCase();
};

console.log(changeToSpinalCase("Let's_get_things_done"));
console.log(changeToSpinalCase('NoWayJosè'));

// returns
// let's_get_things_done
// no-way-josè

/***************************************************/
