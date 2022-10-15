const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
function Error(message) {
  this.message = message;
}

const chainMaker = {
  chainArr: [],

  getLength() {
    return this.chainArr.length;
  },

  addLink(value) {
    if (arguments) {
      this.chainArr.push(`( ${String(value)} )`)
    } else {
      this.chainArr.push('( )');
    }
    return this;
  },

  removeLink(position) {
    if(Number.isInteger(position) && (position >= 1 && position < this.chainArr.length)){
      this.chainArr.splice(position - 1, 1);
      return this;
    } else {
      this.chainArr = [];
      throw new Error("You can't remove incorrect link!");
    }
  },

  reverseChain() {
    this.chainArr.reverse();
    return this;
  },

  finishChain() {
    let finalChain = this.chainArr.join('~~');
    this.chainArr = [];
    return finalChain;
  }
};

module.exports = {
  chainMaker
};
