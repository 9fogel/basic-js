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
  depth = 1;

  calculateDepth(arr) {

    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        console.log(arr[i]);
        console.log('Array!');
        // this.depth += 1;
        // console.log('this.depth', this.depth);
        arr = arr.flat();
        // this.calculateDepth(arr);
        this.depth = this.depth + this.calculateDepth(arr);
        return this.depth;
        // return (this.depth += this.calculateDepth(arr));
      } else {
        // console.log('else');
        this.depth = 1;
        continue;
      }
    }

    console.log('depth', this.depth);
    let result = this.depth;
    this.depth = 1;
    // console.log(result);
    return result;

  }
  // depth = 1;
}

// class DepthCalculator {

//   calculateDepth(arr) {

//     this.counter = 1;
//     this.depth = 1;

//     for (let i = 0; i < arr.length; i++) {
//       if (Array.isArray(arr[i])) {
//         console.log('Array!');
//         arr = arr[i].flat();
//         // this.depth += this.calculateDepth(arr);
//         // console.log(result);
//         return this.depth += this.calculateDepth(arr);
//       } else {
//         return this.depth;
//       }
//     }
//     console.log(this.depth);

//     // for (let i = 0; i < arr.length; i++) {
//     //   if (Array.isArray(arr[i])) {
//     //     this.counter = 1 + this.calculateDepth(arr[i]);
//     //   }
//     // this.depth = this.counter;
//     // }

//     // if (this.counter > this.depth) {
//     //   console.log(this.counter);
//     //   this.depth = this.counter;
//     //   this.counter = 1;
//     // }

//     // this.counter = 1;
//     // console.log('depth', this.depth);
//     return this.depth;

//   }
// }

module.exports = {
  DepthCalculator
};
