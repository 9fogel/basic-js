const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
  function deleteDigit(n) {
  let arr = Array.from(String(n))

  let max = Math.max(...arr);
  let min = Math.min(...arr);

  let firstIndex = arr.indexOf(String(max));
  let minIndex = arr.indexOf(String(min));


  if (firstIndex === 0 || firstIndex === arr.length-1) {
    arr.splice(minIndex, 1);
  } else if ((firstIndex !== arr.length-1) && (firstIndex !== 0)) {
    arr.splice(firstIndex - 1, 1);
  }

  let result = +arr.join('');
  return result;

}

module.exports = {
  deleteDigit
};
