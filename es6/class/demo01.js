/**
 * 功能描述:
 * 2017/9/5
 * 作者：liuguanbang
 */

// 事实上，类的所有方法都定义在类的prototype属性上面。
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + JSON.stringify(this.x) + ', ' + JSON.stringify(this.y) + ')';
  }

  getName() {
    return 1;
  }
}

const a = new Point({'a':12,'b':34}, 3);

//类的数据类型就是函数，类本身就指向构造函数。
console.log(typeof Point);  // function
console.log(Point === Point.prototype.constructor); // true

// 类的内部所有定义的方法，都是不可枚举的
console.log(Object.keys(Point.prototype)); // []
console.log(Object.getOwnPropertyNames(Point.prototype)); // [ 'constructor', 'toString', 'getName' ]

console.log(Reflect.ownKeys(Point.prototype));
