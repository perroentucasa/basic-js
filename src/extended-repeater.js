const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater( str, options ) {
 let resultChain = [];
  let defSeparator = "";
  let repeatElement = "";
  let addSeparator = "";
  let addRepeatTimes;

  if (!options) {
    resReturn = str;
    return resReturn;
  } else {
    !options.separator
      ? (defSeparator = "+")
      : (defSeparator = options.separator);

    !options.additionSeparator
      ? (addSeparator = "|")
      : (addSeparator = options.additionSeparator);

    if (options.hasOwnProperty("addition")) {
      !options.additionRepeatTimes
        ? (addRepeatTimes = 1)
        : (addRepeatTimes = options.additionRepeatTimes);

      for (let s = 0; s < addRepeatTimes; s++) {
        addRepeatTimes > 1 && s < addRepeatTimes - 1
          ? (repeatElement = repeatElement + options.addition + addSeparator)
          : (repeatElement = repeatElement + options.addition);
      }

      str = str + repeatElement;
    }
    if (!options.repeatTimes) {
      options.repeatTimes = 1;
    }
    for (let i = 0; i < options.repeatTimes; i++) {
      resultChain = [...resultChain, str];
    }
    resReturn = resultChain.join(defSeparator);
  }

  return resReturn;
}

module.exports = {
  repeater
};
