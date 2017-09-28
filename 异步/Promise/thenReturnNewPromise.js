/**
 * 功能描述:
 * 2017/9/14
 * 作者：liuguanbang
 */

const aPromise = new Promise((resolve) => {
  resolve(100);
});

const thenPromise = aPromise.then((value) => console.log(value));

const catchPromise = thenPromise.catch((err) => console.log(err));

console.log(aPromise === thenPromise);
console.log(thenPromise === catchPromise);