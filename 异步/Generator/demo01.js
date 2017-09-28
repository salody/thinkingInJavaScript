/**
 * 功能描述: 初识Generator
 * 然后，Generator 函数的调用方法与普通函数一样，也是在函数名后面加上一对圆括号。
 * 不同的是，调用 Generator 函数后，该函数并不执行，返回的也不是函数运行结果，而是一个指向内部状态的指针对象
 * 就是返回一个遍历器对象Iterator
 *
 * 下一步，必须调用遍历器对象的next方法，使得指针移向下一个状态。
 * 也就是说，每次调用next方法，内部指针就从函数头部或上一次停下来的地方开始执行，
 * 直到遇到下一个yield表达式（或return语句）为止。
 * 换言之，Generator 函数是分段执行的，yield表达式是暂停执行的标记，而next方法可以恢复执行。
 *
 * @author: liuguanbang
 * 2017/9/28
 */

// 遍历器对象的next方法的运行逻辑如下。
//
// （1）遇到yield表达式，就暂停执行后面的操作，并将紧跟在yield后面的那个表达式的值，作为返回的对象的value属性值。
//
// （2）下一次调用next方法时，再继续往下执行，直到遇到下一个yield表达式。
//
// （3）如果没有再遇到新的yield表达式，就一直运行到函数结束，直到return语句为止，并将return语句后面的表达式的值，作为返回的对象的value属性值。
//
// （4）如果该函数没有return语句，则返回的对象的value属性值为undefined。

function* helloGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
}
const hw = helloGenerator();
hw.next(); //{ value: 'hello', done: false }
hw.next(); //{ value: 'world', done: false }
hw.next(); //{ value: 'ending', done: true }


// yield表达式本身没有返回值，或者说总是返回undefined。
// next方法可以带一个参数，该参数就会被当作上一个yield表达式的返回值。
function* foo(x) {
  let y = 2 * (yield (x + 1));
  let z = yield (y / 3);
  return (x + y + z);
}
let a = foo(5);
a.next(); // {value:6, done:false}
a.next(); // { value: NaN, done: false }

let b = foo(5);
console.log(b.next());     // x = 5   { value:6, done:false }
console.log(b.next(12));   // y = 2 * 12  = 24    { value:8, done:false }
console.log(b.next(13));   // z = 13  { value:42, done:true }
