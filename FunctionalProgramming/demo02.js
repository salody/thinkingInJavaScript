/**
 * 功能描述: Higher Order Functions
 *
 * 输入或者输出是函数的函数就是高阶函数
 * @author: liuguanbang
 * 2017/9/29
 */

// 重复执行函数fn多次
// function repeat(fn, num) {
//   for (let i = 0; i < num; i ++) {
//     fn();
//   }
// }


// 官方解法 (递归在函数式编程中非常常见)
function repeat(fn, num) {
  if (num <= 0) return;
  fn();
  return repeat(fn, --num);
}
module.exports = repeat;