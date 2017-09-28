
const getUrl = (Url) => {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open('get', Url, true);
    req.onload = () => {
      if (req.status === 200) {
        resolve(req.responseText);
      } else {
        reject(new Error(req.response));
      }
    };
    req.onerror = () => {
      reject(new Error(req.response));
    };
    req.send(null);
  })
};

const request = {
  comment: function getComment() {
    return getUrl('/comment').then(JSON.parse);
  },
  people: function getPeople() {
    return getUrl('/people').then(JSON.parse);
  }
};

const main = () => {
  return Promise.all([request.comment(), request.people()]);
};

// 运行示例
main().then(function (value) {
  console.log(value);
}).catch(function(error){
  console.log(error);
});