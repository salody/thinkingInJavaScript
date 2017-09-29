/**
 * 功能描述: catch error in Generator
 * @author: liuguanbang
 * 2017/9/29
 */

function *upper(items) {
  for (let i = 0; i < items.length; i++) {
    try {
      yield items[i].toUpperCase();
    } catch (e) {
      yield null;
    }
  }
}

var bad_items = ['a', 'B', 1, 'c'];

for (var item of upper(bad_items)) {
  console.log(item);
}
