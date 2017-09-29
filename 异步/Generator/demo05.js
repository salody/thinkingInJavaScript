/**
 * 功能描述: co模块的使用
 * @author: liuguanbang
 * 2017/9/29
 */

// co 支持并发的异步操作，即允许某些操作同时进行，等到它们全部完成，才进行下一步。
// 这时，要把并发的操作都放在数组或对象里面，跟在yield语句后面

const co = require('co');
const fs = require('fs');

const stream = fs.createReadStream('./demo01.js');
let str = '';

co(function*() {
  while(true) {
    const res = yield Promise.race([
      new Promise(resolve => stream.once('data', resolve)),
      new Promise(resolve => stream.once('end', resolve)),
      new Promise((resolve, reject) => stream.once('error', reject))
    ]);
    if (!res) {
      break;
    }
    stream.removeAllListeners('data');
    stream.removeAllListeners('end');
    stream.removeAllListeners('error');
    str += res.toString();
  }
  console.log('content:', str);
});