/**
 * reduce的高阶用法
 * 清洗目录下data.txt的数据。展示成下面的数据
 * 
 */

/* 
let data = {
  'Jack Json': [
    { name: 'waffle iron', price: '80', quantity: '2' },
    { name: 'blender', price: '200', quantity: '1' },
    { name: 'knife', price: '10', quantity: '4' }
  ],
  'Mike Smith': [
    { name: 'waffle iron', price: '80', quantity: '1' },
    { name: 'blender', price: '200', quantity: '3' },
    { name: 'pot', price: '10', quantity: '1' }
  ]
}; 
*/
const fs = require('fs')
let assert = require('assert')

const output = fs.readFileSync('data.txt', 'utf8')
  .trim()
  .split('\n')
  .map(line => line.split('\u0020\u0020'))
  .reduce((customers, line) => {
    /* if (customers[line[0]]) {
      customers[line[0]].push({
        name: line[1],
        price: line[2],
        quantity: line[3]
      })
    } else {
      customers[line[0]] = [{
        name: line[1],
        price: line[2],
        quantity: line[3]
      }]
    } */
    customers[line[0]] = customers[line[0]] || [];
    customers[line[0]].push({
      name: line[1],
      price: line[2],
      quantity: line[3]
    });
    return customers;
  }, {});



console.log('====================================');
console.log(output);
console.log('====================================');

