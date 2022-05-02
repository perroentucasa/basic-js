const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform( arr ) {
  if (!Array.isArray(arr)) {
    throw new Error();
  }

  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string" && arr[i].charAt(0) !== "-") {
      newArr.push(arr[i]);
    }

    if (typeof arr[i] !== "string") {
      newArr.push(arr[i]);
    }

    if (arr[i] === "--discard-next" && i !== arr.length - 1) {
      i++;
    }
    if (
      arr[i] === "--discard-prev" &&
      arr[i - 2] !== "--discard-next" &&
      i !== 0
    ) {
      newArr.pop();
    }
    if (arr[i] === "--double-next" && i !== arr.length - 1) {
      newArr.push(arr[i + 1]);
    }

    if (
      arr[i] === "--double-prev" &&
      arr[i - 2] !== "--discard-next" &&
      i !== 0
    ) {
      newArr.push(arr[i - 1]);
    }
  }
  return newArr;
}

module.exports = {
  transform
};
