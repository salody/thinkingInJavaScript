/**
 * 功能描述: Delegate Generator
 * 数组扁平化
 *
 * We can delegate iteration control from our generator to another one.
 * yield * expression will do the trick, * means that
 * expression is a generator too, so we can send message to it.
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