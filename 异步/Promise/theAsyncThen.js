/**
 * 功能描述: then中指定的方法是异步调用的
 * 即使在调用 promise.then 注册回调函数的时候promise对象已经是确定的状态，
 * Promise也会以异步的方式调用该回调函数，这是在Promise设计上的规定方针。
 *
 * 2017/9/14
 * 作者：liuguanbang
 */

const promise = new Promise((resolve, reject) => {
  console.log('inner1');
  resolve(42);
  console.log('inner2');
});

promise
  .then((value) => {
    console.log(value);
  });

console.log('outer');

// inner1
// inner2
// outer
// 42
