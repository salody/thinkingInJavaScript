/**
 * 功能描述: 使用DI来make the code testable
 *  The ability to manage the dependencies effectively 
 * @author: liuguanbang
 * 2017/10/16
 */

const assert = require('assert');

function getAnimals(fetch, id) {
  return fetch('http://api.anilamfarmgame.com/animals/' + id)
    .then(response => response.json())
    .then(data => data.result[0])
}

/* {
  result: [{
    name: '金毛',
    type: '犬类'
  }];
} */

describe('getAnimals', () => {
  it('works in basic case', () => {
    const fakeFetch = url => {
      assert(url === 'http://api.anilamfarmgame.com/animals/123');
      return new Promise(function (resolve) {
      });
    };
    getAnimals(fakeFetch, 123);
  });

  it('parse the response of fetch correctly', () => {
    const fakeFetch = url => {
       return Promise.resolve({
          json: () => Promise.resolve({
            result: [{
              name: '金毛',
              type: '犬类'
            }]
          })
       });
    };
    getAnimals(fakeFetch, 12345)
      .then(result => assert(result.name === '金毛'));

  });
});