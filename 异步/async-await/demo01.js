/**
 * 定义async函数的方法
 */


async function fun1(params) {}

const fun2 = async function (params) {}

const fun3 = async () => {}

const obj = {
  async foo() {
    return 123
  },
  bar () {
    return 456
  },
  name: 'salody'
}

console.log(obj.foo());
console.log(obj.bar());