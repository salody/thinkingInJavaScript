/**
 * 功能描述: 判断target对象的某个方法method被调用了多少次
 * 对函数进行注入改造。类似于中间件的用法
 *
 * @author: liuguanbang
 * 2017/10/9
 */

// 当代码 new foo(...) 执行时：
//
// 1.一个新对象被创建。它继承自foo.prototype.
// 2.构造函数 foo 被执行。执行的时候，相应的传参会被传入，同时上下文(this)会被指定为这个新实例。new foo 等同于 new foo(), 只能用在不传递任何参数的情况。
// 3.如果构造函数返回了一个“对象”，那么这个对象会取代整个new出来的结果。如果构造函数没有返回对象，那么new出来的结果为步骤1创建的对象。(一般情况下构造函数不返回任何值，不过用户如果想覆盖这个返回值，可以自己选择返回一个普通对象来覆盖。当然，返回数组也会覆盖，因为数组也是对象。)

function Spy(target, method) {
  let originalFunction = target[method];
  let result = {
    count: 0
  };


  target[method] = function () {
    result.count ++;
    return originalFunction.apply(this, arguments);
  };

  return result;
}

module.exports = Spy;

let spy = new Spy(console, 'error');

console.error('calling console.error');
console.error('calling console.error');
console.error('calling console.error');
console.error('calling console.error');
console.error('calling console.error');
console.error('calling console.error');

console.log(spy.count); // 6