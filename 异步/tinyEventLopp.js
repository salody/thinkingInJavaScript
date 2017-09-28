// EventLoop像一个队列一样，先进先出
const EventLoop = [];
let event;

// "永远"执行
while(true) {
  // 执行一个"tick"
  if (EventLoop.length > 0) {
    // 在队列中取得下一个事件
    event = EventLoop.shift();

    // 执行事件
    try {
      event();
    }
    catch (err) {
      //reportError(err);
    }
  }
}