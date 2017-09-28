/**
 * 功能描述:
 * 2017/9/14
 * 作者：liuguanbang
 */

function taskA() {
  console.log('Task A');
  throw new Error('A中发生错误')
}

function taskB() {
  console.log('Task B');
}


function taskC() {
  console.log('Task C');
}

function onRejected(error) {
  console.log(error);
}

function finalTask() {
  console.log('final Task');

}

const promise = Promise.resolve();

// 在这里A B C用的是同一个catch。也就是说其中一个触发了catch，其后面的同层then不会执行。但是最后的finalTask总是会执行的
promise
  .then(taskA)
  .then(taskB)
  .then(taskC)
  .catch(onRejected)
  .then(finalTask);