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

  let newArr = Array.from(keyStr);

  newArr = newArr.map((item, index) => arrEn.indexOf(item)+arrEn.indexOf(upMessage[index]));

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
  if (this.isDirect) {
    return finalStr;
    } else {
    return finalStr.split('').reverse().join('');;
    }
  }


  decrypt(encryptedMessage, key) {
    if(arguments.length < 2 || arguments[0] == undefined || arguments[1] == undefined) {
      throw new Error ('Incorrect arguments!');
    }

    let upKey = key.toUpperCase();
  let keyStr = '';
    let k = 0;
    let j = 0;
    let g = 0;
    let e = 0;
    let f = 0;
    let d = 0;
    let c = 0;
    let b = 0;
    let a = 0;
    let h = 0;
    let l = 0;
    let m = 0;

    for (let i = 0; i < encryptedMessage.length; i++) {
      if (encryptedMessage[i].charCodeAt() >= 65 && encryptedMessage[i].charCodeAt() <= 90) {
        if (encryptedMessage[i] === ' ') {
          keyStr += ' ';
          k = k;
        } else {
          if (upKey[k]) {
            keyStr += upKey[k];
            k++;
          } else {
            if (upKey[j]) {
              keyStr += upKey[j];
              j++;
            } else {
              if (upKey[g]) {
                keyStr += upKey[g];
                g++;
              } else {
                if (upKey[e]) {
                  keyStr += upKey[e];
                  e++;
                } else {
                  if (upKey[f]) {
                    keyStr += upKey[f];
                    f++;
                  } else {
                    if (upKey[d]) {
                      keyStr += upKey[d];
                      d++;
                    } else {
                      if (upKey[c]) {
                        keyStr += upKey[c];
                        c++;
                      } else {
                        if (upKey[b]) {
                          keyStr += upKey[b];
                          b++;
                        } else {
                          if (upKey[a]) {
                            keyStr += upKey[a];
                            a++;
                          } else {
                            if (upKey[h]) {
                              keyStr += upKey[h];
                              h++;
                            } else {
                              if (upKey[l]) {
                                keyStr += upKey[l];
                                l++;
                              } else {
                                keyStr += upKey[m];
                                m++;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      } else {
        keyStr += encryptedMessage[i];
      }
    }

  let newArr = Array.from(keyStr);

  let indexArr = [];

  newArr.forEach((elem, i) => {
    if (elem.charCodeAt() >= 65 && elem.charCodeAt() <= 90) {
      if (arrEn.indexOf(encryptedMessage[i]) >= arrEn.indexOf(newArr[i])) {
      indexArr.push(arrEn[arrEn.indexOf(encryptedMessage[i]) - arrEn.indexOf(newArr[i])]);
      } else {
        indexArr.push(arrEn[arrEn.indexOf(encryptedMessage[i]) - arrEn.indexOf(newArr[i]) + 26]);
      }
    } else {
      indexArr.push(elem);
    }
  });

  let finalStr = indexArr.join('');
  if (this.isDirect) {
    return finalStr;
    } else {
    return finalStr.split('').reverse().join('');;
    }
  }
}


module.exports = {
  VigenereCipheringMachine
};
