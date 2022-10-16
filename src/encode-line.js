const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let finalStr = '';
  let counter = 1;
  let lettersArr = [];
  let countArr = [];


  for (let i = 0; i < str.length; i++) {
    if (lettersArr.includes(str[i]) && lettersArr[lettersArr.length - 1] === str[i]) {
      countArr.push(countArr.pop() + 1);
    } else {
      lettersArr.push(str[i]);
      countArr.push(counter);
      }
    }

let result = lettersArr.map((letter, i) => {
  if (countArr[i] === 1) {
    return letter;
  } else return countArr[i]+letter
})


return result.join('');
}

module.exports = {
  encodeLine
};
