const assert = require('assert');
const proxy = require('../proxy/proxy.js');

let person = {
  type: 'person',
  test: function () {
    return this.type
  }
}

let animal = {
  type: 'animal',
  test: function () {
    return this.type
  }
}

describe('proxy', () => {
  it('对象的方法被代理到了新的对象上', () => {
    let fnBindContext = proxy(person.test, animal);
    assert.equal('animal', fnBindContext());
  })
})