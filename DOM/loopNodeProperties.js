//get reference to element node object
const nodeAnchor = document.querySelector('a');

//create props array to store property keys for element node object
const props = [];

//loop over element node object getting all properties & methods (inherited too)
for(let key in nodeAnchor){
  props.push(key);
}

//log alphabetical list of properties & methods
console.log(props.sort());
