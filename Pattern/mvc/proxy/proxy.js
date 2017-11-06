// Bind a function to a context,
const proxy = (fn, context) => (...rest) => fn.apply(context, rest);


module.exports = proxy;

