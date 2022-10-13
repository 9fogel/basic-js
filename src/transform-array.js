const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */

 function Error(message) {
  this.message = message;
}

let newArr = [];

function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  if (!arr.includes('--double-next') && !arr.includes('--double-prev') && !arr.includes('--discard-next') && !arr.includes('--discard-prev')) {
    newArr = [...arr];
    let finalArr = [...newArr];
    newArr.length = 0;
    console.log(finalArr);
    return finalArr;
  }
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next') {
      i += 2;
    } else if (arr[i] === '--double-next' && arr[i + 1] !== undefined) {
      // newArr.push(arr[i + 1]);
      newArr.push(arr[i + 1]);
    } else if (arr[i] === '--double-next' && arr[i + 1] === undefined) {
      continue;
    } else if (arr[i] === '--double-prev' && arr[i - 1] !== undefined) {
      newArr.push(arr[i - 1]);
    } else if (arr[i] === '--double-prev' && arr[i - 1] === undefined) {
      continue;
    } else if (arr[i] === '--discard-prev') {
      newArr.pop();
    } else {
      newArr.push(arr[i]);
    }
  }
  let finalArr = [...newArr];
  newArr.length = 0;
  console.log(finalArr);
  return finalArr;
  // return newArr;
}

module.exports = {
  transform
};
