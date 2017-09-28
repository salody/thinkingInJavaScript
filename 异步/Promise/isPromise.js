/**
 * 功能描述: 判断是不是Promise对象
 * @author: liuguanbang
 * 2017/9/28
 */

const isPromise = function (obj) {
  return Promise.prototype.isPrototypeOf(obj);
};

module.exports = isPromise;

function demo() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(200);
    }, 200)
  })
}

console.log(isPromise(demo()));
console.log(isPromise(demo().then()));
console.log(isPromise(Promise.resolve()));