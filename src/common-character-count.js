const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let arr1 = s1.split('');
  let arr2 = s2.split('');
  let sortedArr1 = arr1.sort((a, b) => a > b ? 1 : - 1);
  let sortedArr2 = arr2.sort((a, b) => a > b ? 1 : - 1);

  let counter = 0;
  for (let i = 0; i < arr1.length; i++) {
    if(arr1[i] === arr2[i]) {
      counter++;
    } else if (arr1[i+1] === arr2[i]) {
      counter++;
    }
  }
  return counter;
}

module.exports = {
  getCommonCharacterCount
};
