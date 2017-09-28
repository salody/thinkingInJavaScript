
function timerPromisefy(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(delay);
    }, delay)
  });
}

function timerReject(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('请求被拒绝');
    }, delay)
  });
}

const startDate = Date.now();

// all,所有的promise状态都为fulfilled时，才进行后面的操作。有一个产生错误，就不会有输出，而触发catch
Promise.all([
  timerPromisefy(1),
  timerPromisefy(32),
  timerReject(64),
  timerPromisefy(128),
  timerPromisefy(256),
]).then((value) => {
  console.log(Date.now() - startDate + 'ms');
  console.log(value);
}).catch((err) => {
  console.log(err);
});

// output
// 276ms
// [ 1, 32, 64, 128, 256 ]


// race是竞争关系，只要一个promise为fulfilled，就执行后面then
/*Promise.race([
  timerPromisefy(1),
  timerPromisefy(32),
  timerPromisefy(64),
  timerPromisefy(128),
  timerPromisefy(256),
]).then((value) => {
  console.log(Date.now() - startDate + 'ms');
  console.log(value);
}).catch((err) => {
  console.log(err);
})*/
