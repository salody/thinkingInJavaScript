/**
 * 功能描述: Thunk函数
 * 基于回调函数的一种解决方案
 * fs模块的readFile方法是一个多参数函数，两个参数分别为文件名和回调函数。
 * 经过转换器处理，它变成了一个单参数函数，只接受回调函数作为参数。
 * 这个单参数版本，就叫做 Thunk 函数。
 *
 * 任何函数，只要参数有回调函数，就能写成 Thunk 函数的形式。
 *
 * 生产环境的转换器，建议使用 Thunkify 模块
 * @author: liuguanbang
 * 2017/9/29
 */

const fs = require('fs');

// fs.readFile(filename, callback)

const thunk = function (filename) {
  return function (callback) {
    return fs.readFile(filename, callback)
  }
};

// 一个简单的thunk函数转换器
const Thunk = function (fn) {
  return function (...args) {
    return function (callback) {
      return fn.call(this, ...args, callback);
    }
  }
};

const readFileThunk = Thunk(fs.readFile);
/*readFileThunk('./demo01.js', 'utf-8')((err, data) => {
    console.log(data)
});*/



/**
 * Thunk的自动流程管理
 * run函数，就是一个 Generator 函数的自动执行器。
 * 内部的next函数就是 Thunk 的回调函数。
 * next函数先将指针移到 Generator 函数的下一步（gen.next方法），
 * 然后判断 Generator 函数是否结束（result.done属性），
 * 如果没结束，就将next函数再传入 Thunk 函数（result.value属性），否则就直接退出。
 *
 * 有了这个执行器，执行 Generator 函数方便多了。
 * 不管内部有多少个异步操作，直接把 Generator 函数传入run函数即可。
 * 当然，前提是每一个异步操作，都要是 Thunk 函数，也就是说，跟在yield命令后面的必须是 Thunk 函数。
 */
function run(fn) {
  const gen = fn();

  function next(err, data) {
    const result = gen.next(data);
    if (result.done) return;
    result.value(next);
  }

  next();
}

function* g() {
  // ...
  const f1 = yield readFileThunk('./demo01.js');
  console.log(f1.toString());
  const f2 = yield readFileThunk('./demo02.js');
  const fn = yield readFileThunk('./demo03.js');
  console.log(fn.toString());
}

run(g);