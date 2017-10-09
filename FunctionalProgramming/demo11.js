/**
 * 功能描述: Currying
 * @author: liuguanbang
 * 2017/10/9
 */


// fn.length返回的是函数的参数个数
// fn: The function we want to curry.
// n: Optional number of arguments to curry. If not supplied, `curryN` should use the fn's arity as the value for `n`.
function curry(fn, n) {
  n = n || fn.length;
  return function curried(arg) {
    if (n <= 1) return fn(arg);
    return curry(fn.bind(this, arg), n - 1);
  }
}

module.exports = curry;

function add3(one, two, three) {
  return one + two + three
}
//console.log(curry(add3)(1)(2)(3));

//console.log(curry(add3, 3)(1)(2)(3));

// bind函数提前给一个函数固定了一个参数。
fn = add3.bind(null, 2);
console.log(fn(1, 2));