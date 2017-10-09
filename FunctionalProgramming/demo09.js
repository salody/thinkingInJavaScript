/**
 * 功能描述: block event loop
 * @author: liuguanbang
 * 2017/10/9
 */

function repeat(operation, num) {
  return function () {
    if (num <= 0) return;

    operation();

    return repeat(operation, --num);
  }
}

function trampoline(fn) {
  while(fn && typeof fn === 'function') {
    fn = fn();
  }
}

module.exports = function (operation, num) {
  trampoline(function () {
    return repeat(operation, num);
  })
}



var count = 0
repeat(function recall() {
  count++
}, 20)

console.log('executed %d times.', count)

