/**
 * 功能描述: 函数参数赋默认值
 * 2017/9/5
 * 作者：liuguanbang
 */

function mixArgs(first, second) {
    "use strict";
    console.log(first === arguments[0]);
    console.log(arguments[0]);
    console.log(second === arguments[1]);
    first = {'a':1, 'b':3};
    second = "d";
    console.log(first === arguments[0]);
    console.log(second === arguments[1]);
    console.log(arguments[1]);
}

mixArgs({'a':1, 'b':2}, "b");

// not in strict mode
// Changing first and second has no effect on arguments. This behavior occurs in both nonstrict and strict mode, so you can rely on arguments to always reflect the initial call state.
// 改变形参的值，并不会影响arguments对象。这也就意味着我们总是可以通过arguments这个对象来拿到调用函数时的初始参数
function mixArgs1(first, second = "b") {
    console.log(arguments.length);
    console.log(first === arguments[0]);
    console.log(second === arguments[1]); // false.由于只传了一个参数，所以arguments[1]是undefined,而second付了初始值'b'。
    console.log(second);
    console.log(arguments[1]);
    first = "c";
    second = "d";
    console.log(first);
    console.log(first === arguments[0]);
    console.log(second === arguments[1]);
}

mixArgs1("a");

// 给参数符初始值时，还可以使用函数
let value = 5;

function getValue() {
    return value++;
}

function add(first, second = getValue()) {
    return first + second;
}

console.log('传2个参数求和 ' + add(1, 2));  // 3
console.log('传1个参数求和 ' + add(1));     // 6
console.log('传1个参数求和 ' + add(1));     // 7
// 只有在add函数调用时，才会去计算第二个参数的值


// 函数的第一个参数作为后面参数的默认值
// You can use a previous parameter as the default for a later parameter
function add_1(first, second = first) {
    return first + second;
}

console.log(add_1(1));