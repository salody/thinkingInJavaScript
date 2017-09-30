/**
 * 功能描述: 鸭子模式
 *  对象的methods和properties决定了他的定义(是不是鸭子)
 *  而不是取决于说它是继承自什么类或者接口
 *
 *  "When I see a bird that walks like a duck and swims like a duck and quacks like a duck,
 *  I call that bird a duck"
 *
 *  Function#call allows us to invoke any function with an altered this value.
 *
 * @author: liuguanbang
 * 2017/9/30
 */

/**
 * 为什么总是忘记return
                      .::::.
                    .::::::::.
                   :::::::::::
                ..:::::::::::'
             '::::::::::::'
               .::::::::::
          '::::::::::::::..
               ..::::::::::::.
             ``::::::::::::::::
              ::::``:::::::::'        .:::.
             ::::'   ':::::'       .::::::::.
           .::::'      ::::     .:::::::'::::.
          .:::'       :::::  .:::::::::' ':::::.
         .::'        :::::.:::::::::'      ':::::.
        .::'         ::::::::::::::'         ``::::.
    ...:::           ::::::::::::'              ``::.
   ```` ':.          ':::::::::'                  ::::..
                      '.:::::'                    ':'````..
*/
function duckCountMy(...objs) {
  //console.log(objs);
  return objs.reduce((prev, obj) => {
    if (Object.hasOwnProperty.call(obj, 'quack')) {
      prev = prev + 1;
    }
    return prev;
  }, 0)
}

// 这里涉及到一个问题。hasOwnProperty方法可能被对象所重写，
// 这就导致了直接使用obj.hasOwnProperty('quack')会出现预料不到的问题。
// 下面是我原来写的不健壮的方法，对于下面这种对象就会出现问题
if(typeof obj.hasOwnProperty === 'function' && obj.hasOwnProperty('quack'))

// 永远不要去修改Object.prototype的属性或方法。这很容易带来问题
// 然而你不能保证第三方库有可能干出了2b的事情
// 最安全的做法，就是使用call来直接调用原型上的方法。
const missObj = {
  quack: 'sss',
  hasOwnProperty: function () {

  }
};



//官方写法
function duckCount() {
  return Array.prototype.slice.call(arguments).filter(function(obj) {
    return Object.prototype.hasOwnProperty.call(obj, 'quack')
  }).length
}


// var notDuck = Object.create({quack: true})
// var duck = {quack: true}
// console.log(duckCount(duck, notDuck));

module.exports = duckCount;