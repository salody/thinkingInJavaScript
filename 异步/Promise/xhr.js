const isPromise = require('./isPromise');

function get(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("get", url, true);
    xhr.timeout = 10000;
    xhr.onload = () => {
      if ((xhr.status >=200 && xhr.status < 300) || xhr.status == 304) {
        // 会将promise对象变为resolve（Fulfilled）状态， 同时使用其值调用resolve函数(构造函数中的第一个参数)
        resolve(xhr.responseText);
      } else {
        reject(new Error(xhr.statusText));
      }
    };
    xhr.onerror = () => {
      reject(new Error(xhr.statusText));
    };
    xhr.ontimeout = () => {
      reject('请求超时')
    };
    xhr.send(null);
  })
}

const url = 'http://localhost:8888';
get(url)
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  });
