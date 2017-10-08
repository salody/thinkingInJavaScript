/**
 * 功能描述: Partial application
 * Partial application allows you to create new functions from existing functions,
 * while fixing some number of arguments.
 * @author: liuguanbang
 * 2017/10/9
 */

const logger = (str) => {
  return (...messages) => {
    console.log(str, ...messages)
  }
};

module.exports = logger;
