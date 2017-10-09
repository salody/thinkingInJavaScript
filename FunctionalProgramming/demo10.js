/**
 * 功能描述:
 * @author: liuguanbang
 * 2017/10/9
 */

// 用队列的方法实现前序遍历
function getDependencies(tree) {
  const queue = [tree.dependencies];
  let result = [];


  while (queue.length > 0) {
    const shiftNode = queue.shift();
    for (let key in shiftNode) {
      if (shiftNode.hasOwnProperty(key)) {
        result.push(key + '@' + shiftNode[key].version);
        if (shiftNode[key].dependencies) {
          queue.push(shiftNode[key].dependencies)
        }
      }
    }
  }

  return [...new Set(result)].sort();

}


module.exports = getDependencies;

var loremIpsum = {
  "name": "lorem-ipsum",
  "version": "0.1.1",
  "dependencies": {
    "optimist": {
      "version": "0.3.7",
      "dependencies": {
        "wordwrap": {
          "version": "0.0.2"
        }
      }
    },
    "inflection": {
      "version": "1.2.6"
    }
  }
}

//console.log(getDependencies(loremIpsum)); // => [ 'inflection@1.2.6', 'optimist@0.3.7', 'wordwrap@0.0.2' ]
//console.log(loremIpsum.dependencies);

// 用递归的方法实现
function getDependencies(tree, result) {
  result = result || [];
  let dependencies = tree.dependencies;

  Object.keys(dependencies).forEach((dep) => {
    let key = dep + '@' + tree.dependencies[dep].version;
    if (result.indexOf(key) === -1) result.push(key);
    // 需要带值递归的时候，将值作为参数即可实现
    getDependencies(tree.dependencies[dep], result)
  });

  return result.sort();
}
