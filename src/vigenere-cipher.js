const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
function Error(message) {
  this.message = message;
}

let arrEn = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

class VigenereCipheringMachine {
  constructor (mode = true) {
    this.isDirect = mode;
  }



  encrypt(message, key) {
    if(arguments.length < 2 || arguments[0] == undefined || arguments[1] == undefined) {
      throw new Error ('Incorrect arguments!');
    }

    let upMessage = message.toUpperCase();
    let upKey = key.toUpperCase();
  // console.log(upKey);

  let keyStr = '';
  let k = 0;
  let j = 0;
  let g = 0;
  for (let i = 0; i < upMessage.length; i++) {
    if (upMessage[i].charCodeAt() >= 65 && upMessage[i].charCodeAt() <= 90) {
      if (upMessage[i] === ' ') {
      keyStr += ' ';
      k = k;
    }  else {
      if (upKey[k]) {
        keyStr += upKey[k];
        k++;
      } else {
        if (upKey[j]) {
          keyStr += upKey[j];
          j++;
        } else {
          keyStr += upKey[g];
          g++;
        }
      }
    }
    } else {
      keyStr += upMessage[i];
    }
  }
// console.log(keyStr);

  let newArr = Array.from(keyStr);
  // console.log(newArr);

  newArr = newArr.map((item, index) => arrEn.indexOf(item)+arrEn.indexOf(upMessage[index]));

  // console.log(newArr);

  let finalStr = '';

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] < 0) {
      finalStr += keyStr[i];
    } else if (newArr[i] > 25) {
      finalStr += arrEn[newArr[i] - 26];
    } else {
      finalStr += arrEn[newArr[i]];
    }
  }
  // console.log(finalStr);
  return finalStr;
}


  decrypt(encryptedMessage, key) {
    if(arguments.length < 2 || arguments[0] == undefined || arguments[1] == undefined) {
      throw new Error ('Incorrect arguments!');
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
