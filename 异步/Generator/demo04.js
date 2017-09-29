/**
 * 功能描述: 基于Promise对象的自动执行器
 * @author: liuguanbang
 * 2017/9/29
 */

const fs = require('fs');

const readFile = function (fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    })
  })
};

const gen = function* (){
  const f1 = yield readFile('./demo01.js');
  const f2 = yield readFile('./demo02.js');
  console.log(f1.toString());
  console.log(f2.toString());
};

// 手动执行
// const g = gen();
// g.next().value
//   .then((data) => {
//     g.next(data).value
//       .then(data => {
//         g.next(data)
//       })
//   });

// 自执行函数
function run(gen) {
  const g = gen();

  function next(data) {
    const result = g.next(data);
    if (result.done === true) {
      return result.value;
    }
    result.value.then((data) => {
      next(data);
    })
  }

  next();
}

// 自动执行
run(gen);