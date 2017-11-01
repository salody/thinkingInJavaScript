/**
 * 通过保存原函数引用来对函数进行改写。
 * 
 * 比如要实现一个新的getElementById.每次调用这个方法的时候来log所调用的Id
 * 具体的demo可以参考demo01.html
 */

// 先保存原函数的引用
const _getElementById = document.getElementById;
// 对原函数进行重写
document.getElementById = (...rest) => {
  // 实现需要的新功能，比如Log
  console.log(rest);

  // 把原函数return出去。这样就不会更改函数的功能
  // 注意这里的this的变化，现在的this是window。这里要对this进行重新绑定
  return _getElementById.apply(document, rest);
} 