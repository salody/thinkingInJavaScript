/**
 * 使用AOP装饰函数
 * 
 * 在Function对象上定义两个函数
 * 一个befor,一个after
 * 分别表示在函数之前执行或者之后执行
 * 
 * 具体例子可以参考demo02.html
 */

 Function.prototype.before = function (beforefn) {
   const _self = this;
   return function () {
     beforefn.apply(this, arguments);
     _self.apply(this, arguments);
   }
 }

Function.prototype.after = function (afterfn) {
  const _self = this;
  return function () {
    let origin = _self.apply(this, arguments);
    afterfn.apply(this, arguments);
    return origin;
  }
}