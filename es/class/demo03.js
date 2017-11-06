/**
 * 功能描述: 使用Mixin,多继承。就是将多个对象合成一个类
 * 2017/9/5
 * 作者：liuguanbang
 */

// 将source对象的所有属性拷贝到target对象里面
function copyProperties(target, source) {
  for (let key of Reflect.ownKeys(source)) {
    if ( key !== 'constructor'
      && key !== 'prototype'
      && key !== 'name'
    ) {
      let desc = Object.getOwnPropertyDescriptor(source, key);
      Object.defineProperty(target, key, desc);
    }
  }
}

function mix(...mixins) {
  class Mix{}
  for (let mixin of mixins) {
    copyProperties(Mix, mixin);
    copyProperties(Mix.prototype, mixin.prototype);
  }
  return Mix;
}

// 上面代码的mix函数，可以将多个对象合成为一个类。使用的时候，只要继承这个类即可。

class DistributedEdit extends mix(Loggable, Serializable) {
  // ...
}