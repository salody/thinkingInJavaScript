/**
 * 遍历DOM元素节点
 * @param {node} rootNode - 遍历的起始根节点
 * @param {function} callback - 对遍历到的元素节点执行callback
 */

const traversalNode = (rootNode, callback) => {
  const queue = [rootNode];
  while(queue.length > 0) {
    const shiftNode = queue.shift();
    callback(shiftNode);
    if (shiftNode.children) {
      queue.push(...shiftNode.children)
    }
  }
};

let num = 0;
const printNodeName = (node) => {
  //console.log(node.nodeName)
  num++;
};

traversalNode(document.body, printNodeName);
console.log(num);