/**
 * 功能描述:
 * 一种并发协调的表达称为“协作并发”，它并不那么看重在作用域中通过共享值互动（虽然这依然是允许的！）。
 * 它的目标是将一个长时间运行的“进程”打断为许多步骤或批处理，
 * 以至于其他的并发“进程”有机会将它们的操作穿插进事件轮询队列。
 *
 * 2017/9/13
 * 作者：liuguanbang
 */

/*
var res = [];

// `response(..)`从Ajax调用收到一个结果数组
function response(data) {
  // 连接到既存的`res`数组上
  res = res.concat(
    // 制造一个新的变形过的数组，所有的`data`值都翻倍
    data.map( function(val){
      return val * 2;
    } )
  );
}

// ajax(..) 是某个包中任意的Ajax函数
ajax( "http://some.url.1", response );
ajax( "http://some.url.2", response );*/

// 如果只有几千或更少的结果记录，一般来说不是什么大事。但假如有1千万个记录，那么就可能会花一段时间运行（在强大的笔记本电脑上花几秒钟，在移动设备上花的时间长得多，等等）。
//
// 当这样的“处理”运行时，页面上没有任何事情可以发生，包括不能有另一个response(..)调用，不能有UI更新，甚至不能有用户事件比如滚动，打字，按钮点击等。非常痛苦。

const res = [];
function response(data) {
  // 一次只处理1000个
  const chunk = data.splice(0, 1000);
  res.concat(
    chunk.map((value) => value * 2)
  );

  if (data.length > 0) {
    setTimeout(() => {
      response(data);
    },0)
  }
}

ajax( "http://some.url.1", response );
ajax( "http://some.url.2", response );