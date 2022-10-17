const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let newMatrix = [];
  let counter = 0;
  let row = [];

  let i = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let k = 0; k < matrix[i].length; k++) {

      if (matrix[i - 1] !== undefined) {
        if (matrix[i - 1][k - 1] === true) {
          counter++;
        }
        if (matrix[i - 1][k] === true) {
          counter++;
        }
        if (matrix[i - 1][k + 1] === true) {
          counter++;
        }
      }

      if (matrix[i] !== undefined) {
        if (matrix[i][k - 1] === true) {
          counter++;
        }
        if (matrix[i][k + 1] === true) {
          counter++;
        }
      }

      if (matrix[i + 1] !== undefined) {
        if (matrix[i + 1][k - 1] === true) {
          counter++;
        }
        if (matrix[i + 1][k] === true) {
          counter++;
        }
        if (matrix[i + 1][k + 1] === true) {
          counter++;
        }
      }
      row.push(counter);
      counter = 0;

    }
    newMatrix.push(row);
    row = [];

  }
  return newMatrix;
}

module.exports = {
  minesweeper
};
