/**
 * 功能描述: 异步任务封装
 * @author: liuguanbang
 * 2017/9/28
 */

const fetch = require('node-fetch');

function* gen() {
  const url = 'https://api.github.com/users/salody';
  const result = yield fetch(url);
  console.log(result.id)
}

const g = gen();
const result = g.next();

result.value
  .then((response) => response.json())
  .then(data => g.next(data));

