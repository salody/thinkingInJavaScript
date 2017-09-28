
/*
* 这一段又一段的callback，看的我脑子疼
* */


/**
 * get方法请求URL,获取到数据后，执行callback
 * @param {string} URL - 网络请求地址
 * @param {function} callbak - 回调函数
 */
const getURLCallback = (URL, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.open("get", URL, true);
  xhr.onload = () => {
    if (xhr.status === 200) {
      callback(null, xhr.responseText);
    } else {
      callback(new Error(xhr.statusText), xhr.response);
    }
  };
  xhr.onerror = () => {
    callback(new Error(xhr.statusText));
  }
  xhr.send(null);
};

/**
 * 对JSON数据进行安全解析
 */
const jsonParse = (callback, error, value) => {
  if (error) {
    callback(error, value);
  } else {
    try {
      const result = JSON.parse(value);
      callback(null, result);
    } catch (e) {
      callback(e, value);
    }
  }
};

/**
 * 各种XHR请求
 */
const request = {
  comment: function getComment(callback) {
    return getURLCallback('', jsonParse.bind(null, callback));
  },
  people: function getComment(callback) {
    return getURLCallback('', jsonParse.bind(null, callback));
  }
};

/**
 * 启动多个xhr请求，当所有请求返回时调用callback
 */
const allRequest = (requests, callback, results) => {
  if (requests.length === 0) {
    return callback(null, results);
  }
  const req = requests.shift();
  req((err, value) => {
    if (err) {
      console.log(err);
    } else {
      results.push(value);
      allRequest(requests, callback, results);
    }
  })
};
function main(callback) {
  allRequest([request.comment, request.people], callback, []);
}
// 运行的例子
main(function(error, results){
  if(error){
    return console.error(error);
  }
  console.log(results);
});










