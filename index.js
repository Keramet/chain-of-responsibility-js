const chainFactory = require('./chainFactory');
const { Handler1, Handler2 } = require('./handlers');

const chain = chainFactory([
  new Handler1(),
  new Handler2(222),
]);


console.log(chain.handle(1));
console.log(chain.handle(2));
console.log(chain.handle(3));
