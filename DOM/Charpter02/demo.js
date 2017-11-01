const div = document.querySelector('#test');

// div.onclick = function (e) {
//   console.log('====================================');
//   console.log(e);
//   console.log(this);
//   console.log('====================================');
// }

const throttle = (fn, interval) => {
  let timer;
  let firstTime = true;

  return (...rest) => {
    if (firstTime) {
      fn.apply(this, rest);
      firstTime = false;
    }
    if (timer) {
      return false;
    }
    timer = setTimeout(() => {
      clearTimeout(timer);
      timer = null;
      fn.apply(this, rest);
    }, interval || 500);
  }
};

div.addEventListener('mousemove', throttle(function (e) {
  console.log(e);
}, 2000));