/**
 * 功能描述: 实现类的私有方法
 * 2017/9/5
 * 作者：liuguanbang
 */

// 在命名上加以区别，但还是能被访问到
class Widget1 {
  // 共有方法
  foo1(baz1) {
    this._bar1(baz1);
  }

  // 私有方法
  _bar1(baz){
    return this.snaf = baz;
  }
}

// 直接提到外面，call
class Widget {
  foo(baz) {
    bar2.call(this, baz);
  }
}

function bar2(baz) {
  return this.snaf = baz;
}

// 利用Symbol值得唯一性
const bar = Symbol('bar');
const snaf = Symbol('snaf');
class myClass {
  // 共有方法
  foo(baz) {
    this[bar](baz);
  }

  // 私有方法
  [bar](baz) {
    // 私有属性
    return this[snaf] = baz;
  }

  // 共有方法获取私有属性this[snaf]
  getSnaf() {
    return this[snaf];
  }
}

const my = new myClass();

console.log(my.getSnaf());
my.foo(123);
console.log(my.getSnaf());