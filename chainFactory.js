const BaseHandler = require('./handlers/BaseHandler');

const chainFactory = handlerList => handlerList
  .reduce((_, handler, i, arr) => {
    if (!(handler instanceof BaseHandler)) throw new Error('Incorrect handler class');
    if (i === arr.length - 1) return arr[0];
    handler.setNext(arr[i + 1]);
  }, {});


module.exports = chainFactory;
