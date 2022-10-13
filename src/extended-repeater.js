const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // let finalStr = '';
  // let subStr = str + options.addition + options.additionSeparator + options.separator +


  let addArr = [];
  if (options.additionRepeatTimes === 1 || options.additionRepeatTimes === undefined) {
    addArr.push(options.addition);
  } else {
    for (let i = 0; i < options.additionRepeatTimes; i++) {
    addArr.push(options.addition);
      if (options.additionSeparator) {
        addArr.push(options.additionSeparator);
      } else {
        addArr.push('|');
      }

    }
    addArr.pop();
  }

  let strArr = [];
  if(options.repeatTimes === 1 || options.repeatTimes === undefined) {
    strArr.push(str);
    strArr.push(...addArr);
  } else {
    for (let i = 0; i < options.repeatTimes; i++) {
      strArr.push(str);
      strArr.push(...addArr);
      if (options.separator) {
        strArr.push(options.separator);
      } else {
        strArr.push('+');
      }

    }
    strArr.pop();
  }

  let finalArr = [];
  if(strArr.includes(null)) {
    finalArr = strArr.map((item) => String(item))
      .join('');
  } else {
    finalArr = strArr.join('')
  }

return finalArr;
}

module.exports = {
  repeater
};
