const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor() {
    this.counter = 0;
    this.counterArr = [];
    // this.calculateDepth = this.calculateDepth.bind(this);
  }

  calculateDepth(arr) {

    // for (let i = 0; i < arr.length; i++) {
    //   if(Array.isArray(arr[i])) {
    //     this.counter += 1;
    //     this.calculateDepth(arr[i]);
    //   } else {
    //     this.counter += 0;
    //   }



    // n.children.forEach(function (n) {
    //   this.countChildren(n, levelWidth, level+1);
    // }.bind(this));

    if(Array.isArray(arr)) {
      this.counter++;
      arr.forEach(function (arr, index) {
        this.counter += 1
        this.calculateDepth(arr[index]);
      }.bind(this));
      this.counterArr.push(this.counter);
    } else {
      this.counter += 1
    }
  return this.counter;
  }
}

module.exports = {
  DepthCalculator
};
