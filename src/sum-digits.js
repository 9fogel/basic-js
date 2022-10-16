const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
let arr = [];

function getSumOfDigits(n) {
  let str = String(n);
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    arr.push(str[i]);
  }
  arr.forEach((elem) => {
    sum += +elem;
  });
  arr.length = 0;
  if (sum < 10) {
    return sum;
  } else {
    return getSumOfDigits(sum);
  }
   // console.log(sum);
}


module.exports = {
  getSumOfDigits
};
