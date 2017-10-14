/**
 * 功能描述:
 * @author: liuguanbang
 * 2017/10/15
 */

const co = require('co');
const isPromise = require('../Promise/isPromise');

function fakeFetch() {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      console.log(1);
      resolve({
        created: '2017-10-14T17:11:21.112Z',
        id: '12345',
        token: 'thisIsFakeToken'
      })
    }, 500);
  });
}

function* updateToken() {
  // 模拟fetch
  let token = yield fakeFetch();
  return token;
}

let a = co(function* () {
  let t = yield updateToken()
  console.log(t);
})

console.log(isPromise(a));