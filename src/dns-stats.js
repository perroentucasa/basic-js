const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats( domains ) {
  const resultObj = {};
  domains.forEach((el) => {
    let count = '';
    const arrayDom = el.split('.');
    for (let i = arrayDom.length - 1; i >= 0; i--) {
      count += `.${arrayDom[i]}`;
      if (!resultObj[count]) {
        resultObj[count] = 1;
      } else {
        resultObj[count] += 1;
      }
    }
  });
  return resultObj;
}

module.exports = {
  getDNSStats
};
