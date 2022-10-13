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
  console.log(arr);
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  if (arr.every(isFinite)) {
    newArr = [...arr]
    return newArr;
  }
  for (let i = 0; i < arr.length; i++) {
    if (typeof(arr[i] === 'number') && !isNaN(arr[i]) && arr[i-1] !== '--discard-next') {
          newArr.push(arr[i]);
        } else if (arr[i] === '--discard-next') {
          i++;
        } else if (arr[i] === '--double-next' && arr[i + 1] !== undefined) {
          newArr.push(arr[i + 1]);
          newArr.push(arr[i + 1]);
        } else if (arr[i] === '--double-prev' && arr[i - 1] !== undefined) {
          newArr.push(arr[i - 1]);
        } else if (arr[i] === '--discard-prev') {
          newArr.pop();
        } else if (typeof(arr[i] !== 'number');
    }
  // arr.forEach ((elem, index, array) => {
  //   if (isFinite(elem)) {
  //     newArr.push(elem);
  //   } else if (elem === '--discard-next') {
  //     continue;
  //   } else if (elem === '--double-next') {
  //     newArr.push(elem * 2);
  //   } else if (elem === '--double-prev') {
  //     newArr.pop();
  //     newArr.push(array[index - 1] * 2);
  //   } else if (elem === '--discard-prev') {
  //     newArr.pop();
  //   }
  // });
  return newArr;
}

module.exports = {
  transform
};
