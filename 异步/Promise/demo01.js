/**
 * 功能描述: promise.then里面还是一个异步的情况的解决
 * 2017/9/13
 * 作者：liuguanbang
 */


// then方法返回的是一个新的Promise实例（注意，不是原来那个Promise实例）。因此可以采用链式写法，即then方法后面再调用另一个then方法。如果返回的是一个值，就是实际resolve的值
function asyncFunction(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(data)
    }, 100);
    //reject("you are fired!")
  })
}

asyncFunction('hello')
  .then((data) => {
    return asyncFunction(data +'world')
  })
  .then((data) => {
    console.log(data);
  });