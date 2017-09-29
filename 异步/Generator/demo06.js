/**
 * 功能描述: Generator和for of
 * @author: liuguanbang
 * 2017/9/29
 */

function *range(from, to) {
  while(from <= to) {
    yield from;
    from++;
  }
}

for (let r of range(5, 10)) {
  console.log(r);
}