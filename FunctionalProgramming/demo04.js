/**
 * 功能描述: 递归 recursion
 * @author: liuguanbang
 * 2017/9/30
 */

function myReduce(arr, fn, init) {
  let prev = init;
  arr.forEach((item, index, arr) => {
    prev = fn(prev, item, index, arr);
  });
  return prev;
}

// 官方解法
function reduce(arr, fn, init) {
  return (function reduceOne(index, value) {
    if (index > arr.length - 1) return value;
    return reduceOne(index + 1, fn(value, arr[index], index, arr));
  })(0, init);
}


const result = reduce([1,2,3], (prev, cur, index, arr) => {
  return prev + cur;
}, 0);
console.log(result);

//module.exports = reduce;