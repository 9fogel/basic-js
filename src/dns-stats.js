const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {

  let newArr = [];
  domains.forEach((elem) => {
    newArr.push(elem.split('.').reverse());
  });

  let obj = {};
  let wordArr = [];

    newArr.forEach((elem) => {
    console.log('elem', elem);
    for (let i = 0; i < elem.length; i++) {
      if(elem[i - 1]){
        elem[i] = `${elem[i - 1]}.${elem[i]}`;
      } else {
        elem[i] = `.${String(elem[i])}`;
      }
    }
  });

  console.log(newArr);

  newArr.forEach((elem) => {
    console.log(elem);
    elem.forEach((word) => {
      console.log(word);
      newArr.push(word)
      // console.log(obj[subArr[i]]);
      if (obj[word] === undefined) {
        obj[word] = 0;
        obj[word]++;
      } else {
        obj[word]++;
      }
    })
  });

  console.log(obj);
  return obj;



}

module.exports = {
  getDNSStats
};
