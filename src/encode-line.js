const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let counter = 1;
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (i > 0) {
      if (str[i] === str[i - 1]) {
        counter++;
      } else {
        result += `${counter > 1 ? counter : ''}${str[i - 1]}`;
        counter = 1;
      }
      if (i === str.length - 1) {
        result += `${counter > 1 ? counter : ''}${str[i]}`;
      }
    }
  }
  return result;
}

module.exports = {
  encodeLine
};
