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

  calculateDepth(arr) {

    this.counter = 1;
    this.depth = 1;

    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        this.counter = 1 + this.calculateDepth(arr[i]);
      }
    this.depth = this.counter;
    }

    // if (this.counter > this.depth) {
    //   console.log(this.counter);
    //   this.depth = this.counter;
    //   this.counter = 1;
    // }

    // this.counter = 1;
    console.log('depth', this.depth);
    return this.depth;

  }
}

module.exports = {
  DepthCalculator
};
