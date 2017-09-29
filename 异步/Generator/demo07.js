/**
 * 功能描述: Delegate Generator
 * 数组扁平化
 *
 * @author: liuguanbang
 * 2017/9/29
 */

function *flat(arr) {
  for(let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])){
      yield *flat(arr[i])
    } else {
      yield arr[i];
    }
  }
}

const A = [1, [2, [3, 4], 5], 6];

for (let f of flat(A)) {
  console.log(f);
}