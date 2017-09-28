/**
 * 功能描述:
 * 2017/9/14
 * 作者：liuguanbang
 */

// `foo()`是一个兼容Promise

// `timeoutPromise(..)`在早前定义过，
// 返回一个在指定延迟之后会被拒绝的Promise

// 为`foo()`设置一个超时
Promise.race( [
  foo(),					// 尝试`foo()`
  timeoutPromise( 3000 )	// 给它3秒钟
] )
  .then(
    function(){
      // `foo(..)`及时地完成了！
    },
    function(err){
      // `foo()`要么是被拒绝了，要么就是没有及时完成
      // 可以考察`err`来知道是哪一个原因
    }
  );