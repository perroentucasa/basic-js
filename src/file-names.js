const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles( names ) {
  const resultArr = [];
  let counter1 = 1;
  let counter2 = 1;
  names.forEach((el) => {
    if (resultArr.includes(el)) {
      if (resultArr.indexOf(el) === names.indexOf(el)) {
        resultArr.push(`${el}(${counter1})`);
        counter1 += 1;
      } else {
        resultArr.push(`${el}(${counter2})`);
        counter2 += 1;
      }
    } else resultArr.push(el);
  });
  return resultArr;
}

module.exports = {
  renameFiles
};
