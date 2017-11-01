/**
 * decorator装饰者模式的传统面向对象实现
 * 
 */

class Plane {
  fire() {
    console.log('====================================');
    console.log('发射普通子弹');
    console.log('====================================');
  }
}

class MissileDecorator {
  constructor(plane) {
    this.plane = plane;
  }

  fire() {
    this.plane.fire(); //注意这里需要调用原来自己的fire。不然fire会被置换掉
    console.log('====================================');
    console.log('发射导弹');
    console.log('====================================');
  }
}

class AtomDecorator {
  constructor(plane) {
    this.plane = plane;
  }

  fire() {
    this.plane.fire();
    console.log('====================================');
    console.log('发射原子弹');
    console.log('====================================');
  }
}

let plane = new Plane();
plane = new MissileDecorator(plane);
plane = new AtomDecorator(plane);
plane.fire()

// OUTPUT:
// ====================================
// 发射原子弹
// ====================================
// decorator $ node demo01.js 
// ====================================
// 发射普通子弹
// ====================================
// ====================================
// 发射导弹
// ====================================
// ====================================
// 发射原子弹
// ====================================