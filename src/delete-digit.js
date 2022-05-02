const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {
  let lettersArr = [];
  const numbersArr = [];
  let i = 0;
  lettersArr = n.toString().split('');
  lettersArr.forEach((letter) => numbersArr.push(Number(letter)));
  i = numbersArr.indexOf(Math.min(...numbersArr));
  numbersArr.splice(i, 1);
  return Number(numbersArr.join(''));
}

module.exports = {
  deleteDigit
};
