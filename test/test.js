const add = require('../add');
let expect = require('chai').expect;


describe('加法函数的测试', function() {
    it('1 加 1 应该等于 2', function() {
        expect(add(1, 1)).to.be.equal(2);
    });
});

const switchProto = {
    isOn: function () {
        return this.state;
    },
    toggle: function () {
        this.state = !this.state;
        return this;
    },
    state: false
};

const switch1 = Object.create(switchProto);
const switch2 = Object.create(switchProto);

switch1.toggle();

describe('测试Object.create', function () {
    it('switch1和switch2应该有相同的原型对象', function () {
        expect(switch1.state).to.not.be.equal(switch2.state)
    })
});