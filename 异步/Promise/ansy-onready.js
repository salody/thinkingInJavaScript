/**
 * 功能描述: 使用promise改造页面加载完成判断函数
 * 2017/9/14
 * 作者：liuguanbang
 */

/*function onReady(fn) {
  var readyState = document.readyState;
  if (readyState === 'interactive' || readyState === 'complete') {
    // 这里这样做是为了不让异步函数中出现同步的东西
    // 不要对异步回调函数进行同步调用
    setTimeout(fn, 0);
  } else {
    window.addEventListener('DOMContentLoaded', fn);
  }
}
onReady(function () {
  console.log('DOM fully loaded and parsed');
});
console.log('==Starting==');*/


const onReady = () => {
  return new Promise((resolve, reject) => {
    const readyState = document.readyState;
    if (readyState === 'interactive' || readyState === 'complete') {
      // promise本身就是异步的，所以这里不需要加setTimeout
      resolve();
    } else {
      window.addEventListener('DOMContentLoaded', resolve);
    }
  })
};

onReady()
  .then(() => {
    console.log('页面加载完成');
    console.groupEnd();
  })
  .then(() => {
    console.group('可以开始操作DOM');
    console.info('一些info');
  })
  .then(() => {
    console.log('lorem');
    console.groupEnd()
  });

console.group('页面加载阶段');
console.log('分组1-1111');
console.log('分组1-2222');
console.log('分组1-3333');
