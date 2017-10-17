/**
 * npm install functional-javascript-workshop 自己体会
 * 功能描述: map、filter、every、some、reduce
 * @author: liuguanbang
 * 2017/9/29
 */

 const assert = require('assert');

function doubleAll(numbers) {
  return numbers.map((number) => number * 2)
}


// [{
//   message: 'Esse id amet quis eu esse aute officia ipsum.' // random
// },...]
function getShortMessages(messages) {
  return messages
    .filter((item) => item.message.length < 50)
    .map((item) => item.message);
}

// function checkUsersValid(originUsers) {
//   return function allUsersValid(submittedUsers) {
//     return submittedUsers.every((item) => originUsers.map((item) => item.id).indexOf(item.id) !== -1)
//   }
// }
// 官方写法 感觉官方的比较规整和好理解。输入，输出一目了然。自己的写法有点随性
function checkUsersValid(originUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every((submittedUser) => {
      return originUsers.some((originUser) => {
        return originUser.id === submittedUser.id;
      });
    });
  };
}


function countWords(inputWords) {
  return inputWords.reduce((outMap, inputWord) => {
    outMap[inputWord] = ++outMap[inputWord] || 1;
    return outMap;
  }, {});
}


// funfunfunction
let animals = [
  { name: 'Fjsn', species: 'rabbit'},
  { name: 'Caro', species: 'dog'},
  { name: 'Haba', species: 'fish'},
  { name: 'Telo', species: 'dog'},
  { name: 'Candy', species: 'cat'},
];
describe('using array method', () => {
  it('using map', () => {
    let names = animals.map((animal) => animal.name);
    assert(names instanceof Array);
    assert(names.length === 5);
  });
});