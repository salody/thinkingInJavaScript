

// return的值会由 Promise.resolve(return的返回值); 进行相应的包装处理，因此不管回调函数中会返回一个什么样的值，最终 then 的结果都是返回一个新创建的promise对象。
const increment = value => value + 1;
const double = value => value * 2;
const output = value => console.log(value);

const promise = Promise.resolve(1);

promise
  .then(increment)
  .then(double)
  .then(output)
  .catch(err => console.log(err));

// 也就是说， Promise#then 不仅仅是注册一个回调函数那么简单，它还会将回调函数的返回值进行变换，创建并返回一个promise对象。